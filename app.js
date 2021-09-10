require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const mongoose = require('mongoose')

app.use('/user', userRouter)

mongoose.connect(
  process.env.MONGO_CONNERCTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  error => {
    if (error) console.log(error)
    else console.log('Mongo connected')
  }
)

app.listen(process.env.PORT, () => {
  console.log('Server Running')
})
