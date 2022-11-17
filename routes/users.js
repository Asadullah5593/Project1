var express = require('express');
var router = express.Router();
var UserController = require("../controllers/users");

router.post("/signup", UserController.signup)
router.post("/login", UserController.login);

module.exports = router;
