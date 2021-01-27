const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const { config } = require("dotenv");
const path = require("path");
config();

const app = express();
const PORT = process.env.PORT || 8080;
const jsonParser = bodyParser.json();

//Services
require("./backend/services/mongoDB");
require("./backend/services/passport");

//Routes
const authRoutes = require("./backend/routes/auth");
const entryRoutes = require("./backend/routes/entries.js");

//Middleware

app.use(
    session({
        secret: process.env.sessionKey,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 3600000,
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());

//Serve routes
app.use("/", jsonParser, authRoutes);
app.use("/entry", jsonParser, entryRoutes);

//Heroku hosting
if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + "/client/build"));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

app.use("/img", express.static(path.join(__dirname + "client/build")));

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
