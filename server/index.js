const express = require('express')
const dotenv = require('dotenv')
const controller = require('./lib/controller')

dotenv.config();

const app = express()

app.use(controller)
app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`)
})
