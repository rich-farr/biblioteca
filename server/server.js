const express = require('express')
const path = require('path')

const app = express()

// Middleware

const bodyParser = require('body-parser')
const bookRoutes = require('./routes/book')
const authorRoutes = require('./routes/author')

// Hooking up Express middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '/public')))


// app.use('/api/', sessionRoutes)
app.use('/api/books', bookRoutes)
app.use('/api/authors', authorRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

module.exports = app
