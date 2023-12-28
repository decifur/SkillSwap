const express = require('express')
const app = express()
const router = require('./apis/api')


app.use(express.json())
app.use(()=> {
    // console.log(process.env.["mongoose"])
})
app.use('/api', router)


module.exports = app;