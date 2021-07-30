const myApp = new Map()

myApp.set(0, 'zero')
myApp.set(1, 'one')

for(const [key, value] of myApp){
  console.log(key + ' = ' + value)
}

console.log('-----------------------')

for(const key of myApp.keys()){
  console.log(key)
}

console.log('-----------------------')

for(const value of myApp.values()){
  console.log(value)
}

console.log('-----------------------')

for(const [key, value] of myApp.entries()){
  console.log(key + ' = ' + value)
}
