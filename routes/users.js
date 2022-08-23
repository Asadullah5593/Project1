var express = require('express');
var jwt = require("jsonwebtoken");
var router = express.Router();
var md5 = require("md5");
var User = require('../models/userSchema');
var UserController = require("../controllers/users");


router.post("/signup", UserController.signup)
router.post("/login", UserController.login);

module.exports = router;
