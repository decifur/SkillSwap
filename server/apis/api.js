var express = require('express');
var router = express.Router();
const userModle = require("../db/usermodel")
/* GET users listing. */
router.get('/dd', function (req, res, next) {
    res.json({ username: 'kenil111', id: '22244', gmail: "kenil@gmail.com" })
});

router.post('/dd', async function (req, res, next) {
    let user = {
        username: req.body.username,
        email: req.body.email,
       password: req.body.password, id: req.body._id, img: req.body.img
    }
    res.json({ message: 'Login successful',...user})
})
module.exports = router; 