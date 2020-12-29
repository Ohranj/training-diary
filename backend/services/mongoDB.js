const { connect } = require("mongoose");
const { config } = require("dotenv");

config();

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.yot2f.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(console.log("Database running"))
    .catch(console.log((err) => console.log(err)));
