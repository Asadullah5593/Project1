var jwt = require("jsonwebtoken")
var User = require("../models/userSchema")

async function authHandler(req, res, next) {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer ')
    ) {
        try {
            const [, token] = req.headers.authorization.split(' ');
            const {userId} = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(userId).select('-password');
            next();
        } catch (error) {
            res.statusCode = 401;
            throw new Error('Unauthorized');
        }
    } else {
        res.statusCode = 401;
        throw new Error('Unauthorized');
    }
}

module.exports = {authHandler}

