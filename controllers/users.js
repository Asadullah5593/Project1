var express = require("express");
var userModel = require("../models/userSchema");
var md5 = require("md5");
var jwt = require("jsonwebtoken")
const User = require("../models/userSchema");

/**
 * Login endpoint
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
async function login(req, res) {

    var email = req.body.email;
    var password = req.body.password;

    //Request Validation..
    if (!email || !password) {
        return res.status(400).json({error: "Email OR Password cannot be empty"})
    }

    try {
        const user = await userModel.findOne({email: email});

        if (!user) {
            return res.status(404).json({error: "Invalid username OR password"})
        }

        const oldPassword = user?.password;
        const signInPassword = md5(password);

        const jwtToken = await jwt.sign({userId: user._id}, process.env.JWT_SECRET);

        if (user && (oldPassword === signInPassword)) {
            return res.status(200).json({message: "Successfully logged in!", userId: user._id, accessToken: jwtToken})
        } else {
            return res.status(400).json({error: "Invalid username OR password"});
        }

    } catch (error) {
        return res.status(400).json({error: "Error validating user credentials"});
    }
}


/**
 * Signup endpoint
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
async function signup(req, res) {

    // if (Object.keys(req.body).length === 0) {
    //     return res.status(400).json({error: "Invalid signup request body!!"})
    // }

    try {

        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;
        const work = req.body.work;

        let newUser = new User({
            name: name,
            email: email,
            phone: phone,
            password: md5(password),
            work: work
        });
        newUser = await newUser.save();
        res.json({status: 200, message: "User successfully registered", user: newUser});
    } catch (error) {
        console.error(error);
        throw new Error("Unable to register user");
    }
}

module.exports = {login, signup}
