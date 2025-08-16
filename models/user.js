const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const user_model = mongoose.model("User", user_schema);
module.exports = user_model;