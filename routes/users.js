var express = require('express');
var router = express.Router();
var UserController = require("../controllers/users");
var JoiHandler = require("../middlewares/request-validator/request-validator");
var {loginRequestSchema, signupRequestSchema} = require("../schemas/validation-schemas/request-validation-schema");

router.post("/signup", JoiHandler(signupRequestSchema), UserController.signup)
router.post("/login", JoiHandler(loginRequestSchema), UserController.login);

module.exports = router;
