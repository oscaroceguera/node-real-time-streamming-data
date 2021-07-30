'use stric'

const { EventEmitter } = require('events')

class PubSub extends EventEmitter {
  constructor () {
    super({ captureRejections: true })
    this.topics = new Map()
  }

  publish (topic, payload) {
    this.emit(topic, payload)
  }

  subscribe (topic, handler) {
    if (this.topics.has(topic)) {
      this.onSubscribe(topic)
    }

    this.on(topic, handler)
    this.topics.set(topic, handler)
  }

  onSubscribe (topic) {
    if (this.topics.has(topic)) {
      const handler = this.topics.get(topic)
      this.topics.delete(topic)
    } else {
      this.emit('error', new Error(`Topic: ${topic} not found`))
    }
  }
}

module.exports = PubSub
