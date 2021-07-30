'use strict'

// Aplicacion de red (IPC)
// The net module provides an asynchronous network API for creating stream-based TCP or IPC servers (net.createServer()) and clients (net.createConnection()).
// The net module supports IPC with named pipes on Windows, and Unix domain sockets on other operating systems.
const net = require('net')

const server = new net.Server()

server.on('connection', (socket) => {
  socket.setEncoding('utf8')
  socket.write('Welcome to the Echo server\n')
  socket.on('data', (data) => {
    console.log(`Received: ${data}`)
    socket.write(`ECHO: ${data.toUpperCase()}`)
  })
})

server.listen(5000)

// Terminal 1 : node index.js
// terminal 2: nc localhost 5000 y escribes el mensaje
