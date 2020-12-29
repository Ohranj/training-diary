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

//Middleware
app.use("/img", express.static("./backend/assets"));
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

//Heroku hosting
if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "frontend", "build", "index.html")
        );
    });
}

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
