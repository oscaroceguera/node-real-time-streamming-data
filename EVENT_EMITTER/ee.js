'use stric'

const { EventEmitter } = require('events')

const ee = new EventEmitter()

setInterval(() => {
  ee.emit('ping', `${Date.now()}: wake up`)
}, 2000)

module.exports = ee
