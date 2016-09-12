import express from 'express'
import http from 'http'
import path from 'path'

const app = express()
const server = http.createServer(app)

// Middleware

const bodyParser = require('body-parser')
const bookRoutes = require('/routes/book')
const authorRoutes = require('/routes/author')

// Hooking up Express middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '/public')))


// app.use('/api/', sessionRoutes)
app.use('/api/books', userRoutes)
app.use('/api/authors', gameRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

server.listen(3000, () => {
  console.log('Super l33t server on port 3000 is running')
})

module.exports = app
