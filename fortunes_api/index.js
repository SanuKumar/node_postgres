const express = require('express')
const fortunes = require("./data/fortunes.json")

const app = express()

const PORT = 3000

app.get("/", (req, res, next) => {
  res.send('New Fortunes route implemented')
  next()
})

app.get('/fortunes', (req, res, next) => {
  res.send(fortunes)
  next()
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})