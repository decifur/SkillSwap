const app = require('./app.js')
const PORT = 3300;
const passport = require('passport');
const mongoose = require("mongoose")

// require('dotenv').config()
app.use(passport.initialize());
app.use(passport.session());
app.get('/', function (req,res) {
    res.send('Hello, world')
} )

app.listen(PORT, ()=> {
    console.log(`listening on http://localhost:${PORT}`)
}) 