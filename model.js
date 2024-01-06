const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    roll: String,
    id: Number
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;