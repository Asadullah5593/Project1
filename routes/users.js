var express = require('express');
var router = express.Router();
var UserController = require("../controllers/users");
var joinHandler = require("../middlewares/request-validator/request-validator");
var requestSchema = require("../schemas/validation-schemas/request-validation-schema");

router.post("/signup", joinHandler(requestSchema.signupRequest), UserController.signup)
router.post("/login", joinHandler(requestSchema.loginRequest), UserController.login);

module.exports = router;
