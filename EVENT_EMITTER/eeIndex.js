'use stric'

const { emit } = require('nodemon')
const ee = require('./ee')

const listener1 = (value) => {
  console.log(`Listening 1, received: ${value}`)
}

const listener2 = (value) => {
  console.log(`Listening 2, received: ${value}`)
}

const listener3 = (value) => {
  console.log(`Listening 3s, received: ${value}`)
}

const hello = () => {
  return 'Hola Yeissson'
}

// La cantidad maxima para un mismo event listener es 10
// por que despues puede generar problemas de memoria
// pero se puede definir el maximo de listener que se pueden agregar a un mismo event emiter para tener mas control
ee.on('ping', listener1)
ee.on('ping', listener2)
ee.once('ping', listener3)
ee.on('error', (err) => {
  console.log(`An error ocurred: ${err.message}`)
  console.log(err.stack)
})
ee.once('function', (fn) => {
  const value = fn()
  console.log(value)
})

setTimeout(() => {
  console.log('Removing Listeners')
  // ee.removeAllListeners('ping')
  ee.removeListener('ping', listener2)
  ee.emit('error', new Error('kaboom'))
  ee.emit('function', hello) // En red no serializa una funcion (Esto es solo un ejemplo)
}, 10000)
