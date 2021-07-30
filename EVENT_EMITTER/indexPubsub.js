'use stric'

const PubSub = require('./pubSub')

const pubSub = new PubSub()

pubSub.subscribe('envivo', (value) => {
  console.log(`Hay un nuevo EnVivo ${value.title} en: ${value.url}`)
})

setInterval(() => {
  pubSub.publish('envivo', {
    title: 'EventEmitter',
    url: 'https://twitch.tv/julianduque'
  })
}, 2000)

setTimeout(() => {
  pubSub.onSubscribe('temploDeBaal')
}, 5000)
