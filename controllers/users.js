var User = require("../schemas/userSchema");
var md5 = require("md5");
var jwt = require("jsonwebtoken");
var schema = require("../middlewares/Validators/loginRequestValidator")

/**
 * Login endpoint
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
async function login(req, res) {
    var {email, password} = req.body;
    var {error, value} = await schema.loginRequestValidator.validate(req.body);

    //Request Validation..
    if (error) {
        return res.status(422).json({message: "Invalid Request", error: error.details})
    }

    try {
        const user = await User.findOne({email: email});

        if (!user) {
            return res.status(200).json({error: "Invalid username OR password"})
        }

        const oldPassword = user?.password;
        const signInPassword = md5(password);

        const jwtToken = await jwt.sign({userId: user._id}, process.env.JWT_SECRET);

        if (user && (oldPassword === signInPassword)) {
            return res.status(200).json({
                success: true,
                message: "Successfully logged in!",
                userId: user._id,
                accessToken: jwtToken
            })
        } else {
            return res.status(200).json({error: "Invalid username OR password"});
        }

    } catch (error) {
        return res.status(200).json({error: "Error validating user credentials"});
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

        const first_name = req.body.fname;
        const last_name = req.body.lname;
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;

        let newUser = new User({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            password: md5(password)
        });
        newUser = await newUser.save();
        res.json({success: true, message: "User successfully registered", user: newUser});
    } catch (error) {
        console.error(error);
        throw new Error("Unable to register user");
    }
}

module.exports = {login, signup}
