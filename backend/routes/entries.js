const router = require("express").Router();
const UserModel = require("../model/User");

//Get all entries
router.get("/all", (req, res) =>
    UserModel.findById(req.user._id, (err, doc) =>
        doc ? res.status(200).send(doc.entries) : res.sendStatus(401)
    )
);

//Post new entry
router.post("/new", async (req, res) =>
    UserModel.findOne(
        {
            _id: req.user._id,
            "entries.date": { $ne: req.body.entry.date },
        },
        (err, doc) => {
            if (doc) {
                doc.entries.push({
                    ...req.body.entry,
                });
                doc.save();
                res.sendStatus(200);
            } else {
                res.sendStatus(401);
            }
        }
    )
);

//Delete entry
router.delete("/delete", (req, res) =>
    UserModel.updateOne(
        { _id: req.user._id },
        {
            $pull: {
                entries: {
                    date: req.body.entry,
                },
            },
        },
        (err, response) =>
            response ? res.sendStatus(200) : res.sendStatus(401)
    )
);

//Delete exercise
router.delete("/delete/exercise", (req, res) =>
    UserModel.updateOne(
        { _id: req.user._id, "entries.date": req.body.date },
        {
            $pull: {
                "entries.$.exercises": {
                    id: req.body.id,
                },
            },
        },
        (err, response) =>
            response ? res.sendStatus(200) : res.sendStatus(401)
    )
);

//Add exercise
router.patch("/add/exercise", (req, res) =>
    UserModel.updateOne(
        { _id: req.user._id, "entries.date": req.body.date },
        {
            $push: {
                "entries.$.exercises": {
                    ...req.body.exercise,
                },
            },
        },
        (err, response) =>
            response ? res.sendStatus(200) : res.sendStatus(401)
    )
);

module.exports = router;
