const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
  email: String,
  password: String,
  image: String,
  firstName: String,
  lastName: String,
  authentication: String
})


mongoose.model('users', userSchema)