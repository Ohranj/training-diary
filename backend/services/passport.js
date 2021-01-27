const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const googleStrategy = require("passport-google-oauth20").Strategy;
const UserModel = require("../model/User");
const { compare } = require("bcryptjs");
const { config } = require("dotenv");
config();

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) =>
    UserModel.findById(id, (err, user) => done(err, user))
);

passport.use(
    new googleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: "/login/google/callback",
            proxy: true,
        },
        async (accessToken, refreshToken, profile, done) => {
            const userExists = await UserModel.findOne({
                email: profile._json.email,
            });
            if (userExists) {
                return done(null, userExists);
            }
            new UserModel({
                name: profile.name.givenName,
                surname: profile.name.familyName,
                email: profile._json.email,
                password: Number(profile._json.sub) * Math.random(),
            })
                .save()
                .then((user) => done(null, user));
        }
    )
);

passport.use(
    new localStrategy(
        {
            usernameField: "email",
        },
        async (username, password, done) => {
            const userExists = await UserModel.findOne({ email: username });
            if (!userExists) {
                return done(null, false);
            }
            compare(password, userExists.password, (err, match) =>
                match ? done(null, userExists) : done(null, false)
            );
        }
    )
);

//Seems to be a issue with compare statement
