const { Schema, model } = require("mongoose");
const { hash, genSalt } = require("bcryptjs");

const userSchema = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        validate: {
            validator: (val) => /\d/g.test(val),
            message: (props) => `${props} does not contain a number`,
        },
    },
    entries: {
        type: Array,
    },
});

userSchema.pre("save", function (next) {
    genSalt(8, (err, salt) => {
        hash(this.password, salt, (err, hash) => {
            this.password = hash;
            next();
        });
    });
});

const User = model("Users", userSchema);

module.exports = User;
