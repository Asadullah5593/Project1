var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie("jwtttt", "mern");
  res.send({message: "APIs are alive!"})
});

module.exports = router;
