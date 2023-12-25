var express = require('express');
var router = express.Router();
const userModle = require("./users")
/* GET users listing. */
router.get('/dd', function(req, res, next) {

    res.json({username: 'kenil111',id: '22244', gmail: "kenil@gmail.com"})
});

router.post('/dd', async function(req , res, next){
 const user = await userModel.findOne({username: req.session.passport.user});
 console.log(user);
})
module.exports = router; 