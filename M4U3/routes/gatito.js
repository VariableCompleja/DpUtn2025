var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.send('página del gatito');
    res.send('quise poner una imagen pero no pude.');
});

module.exports = router;


