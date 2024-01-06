require('dotenv').config()
const app = require('./app.js')
const PORT = 3000;
// const passport = require('passport');
const mongoose = require("mongoose")


app.get('/', function (req,res) {
    res.send('Hello, world')
} )

app.listen(PORT, ()=> {
    console.log(`listening on http://localhost:${PORT}`)
}) 