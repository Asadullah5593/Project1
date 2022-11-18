var md5 = require("md5");
var jwt = require("jsonwebtoken");
var User = require("../schemas/database-schemas/userSchema");

/**
 * Login endpoint
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
async function login(req, res) {
    var {
        email,
        password
    } = req.body;

    try {
        var user = await User.findOne({email: email});

        if (!user) {
            return res.status(404).json({status: false, error: "Invalid username OR password"})
        }

        const oldPassword = user?.password;
        const signInPassword = md5(password);
        const jwtToken = await jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'}, null);

        if (user && (oldPassword === signInPassword)) {
            user.token = jwtToken;
            await user.save();
            return res.status(200).json({
                status: true,
                userId: user._id,
                accessToken: jwtToken
            })
        } else {
            return res.status(404).json({status: false, error: "Invalid username OR password"});
        }

    } catch (error) {
        return res.status(500).json({status: false, error: error.message});
    }
}


/**
 * Signup endpoint
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
async function signup(req, res) {

    var {
        first_name,
        last_name,
        email,
        phone,
        password
    } = req.body

    try {
        let user = new User({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            password: md5(password)
        });
        user = await user.save();
        delete user.password;
        res.status(200).json({status: true, user: user});
    } catch (error) {
        res.status(500).json({status: false, error: error.message});
    }
}

module.exports = {login, signup}
