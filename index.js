const express = require('express')
require('dotenv').config()
const app = express()
const port=4000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/twitter', function (req, res) {
  res.send('Welcome to twitter')
})

app.get('/login', function (req, res) {
  res.send('<h1> please login at chai aur code </h1>')
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${port}`)
})