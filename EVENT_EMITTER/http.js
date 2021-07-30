'use strict'

const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.end('Hola mundo')
})

server.on('request', (req, res) => {
  console.log(req.headers)
})

server.listen(3000)

// terminal 1 : node http.js
// terminal 2: http http://localhost:3000
