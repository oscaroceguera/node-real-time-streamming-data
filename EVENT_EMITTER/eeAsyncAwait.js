'use stric'

const { on, once, EventEmitter } = require('events')

const ee = new EventEmitter({ captureRejections: true })

async function main () {
  const value = await once(ee, 'greetings')
  console.log(`Received ${value}`)

  for await (const val of on(ee, 'greetings')) {
    console.log(`Async Iterator received: ${val}`)
  }
}

setInterval(() => {
  ee.emit('greetings', 'Holas MTV en Vivo!')
}, 2000)

main()
