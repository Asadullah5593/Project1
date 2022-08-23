var express = require('express');
var router = express.Router();

/**
 * Health Check API Route (Base route).
 */
router.get('/', function (req, res, next) {
    res.send({message: "APIs are alive!"})
});

module.exports = router;
