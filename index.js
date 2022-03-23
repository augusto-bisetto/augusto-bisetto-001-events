// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


// create the app
const app =  express()

// enable POST request
app.use(bodyParser.urlencoded({
  extended: true
}));
// Install ejs - to show JS variables into the HTML
app.set('view engine','ejs')

// Connect to mongoDb
const mongoDbURI = 'mongodb+srv://test:test@cluster0.sxoo5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoDbURI)


// Connect the Models
require('./models/User.js')


// Connect the routes
app.use(require('./routes/users'))


app.listen(3000)