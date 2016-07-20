import express from 'express'
import http from 'http'
import path from 'path'

const app = express()
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, '/public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

server.listen(3000, () => {
  console.log('Super l33t server on port 3000 is running')
})
