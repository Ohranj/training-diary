const router = require("express").Router();
const passport = require("passport");
const UserModel = require("../model/User");

router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log(req.user);
    req.user ? res.sendStatus(200) : res.sendStatus(401);
});

router.get(
    "/login/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

router.get(
    "/login/google/callback",
    passport.authenticate("google"),
    (req, res) => res.redirect("/dashboard")
);

router.get("/user", (req, res) =>
    req.user ? res.sendStatus(200) : res.sendStatus(401)
);

router.post("/register", async (req, res) => {
    const { firstname, surname, email, password } = req.body.user;
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
        return res.sendStatus(401);
    }
    new UserModel({ name: firstname, surname, email, password })
        .save()
        .then((doc, err) => (doc ? res.sendStatus(200) : res.sendStatus(401)));
});

module.exports = router;
