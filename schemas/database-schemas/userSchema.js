const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String, unique: true},
    phone: {type: String},
    password: {type: String},
    token: {type: String}
});

userSchema.methods.generateAuthToken = async function () {
    try {
        this.token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
        await this.save();
        return this.token;
    } catch (err) {
        console.log(err);
    }
}

const User = mongoose.model("User", userSchema)

module.exports = User;