const router = require("express").Router();
const UserModel = require("../model/User");

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

module.exports = router;
