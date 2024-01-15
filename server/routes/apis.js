var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dd', function(req, res, next) {
    res.json({username: 'kenil111',id: '22244', gmail: "kenil@gmail.com"})
});

module.exports = router;