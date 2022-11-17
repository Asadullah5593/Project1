var jwt = require("jsonwebtoken")
var User = require("../../schemas/userSchema")

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
            res.sendStatus(401)
        }
    } else {
        res.sendStatus(401)
    }
}

module.exports = {authHandler}

