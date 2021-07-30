const myMap = new Map()

const keyString = 'a string'
const keyObj = {}
const keyFunc = function(){}

// setting the values
myMap.set(keyString, "Value assocciated with 'a string'")
myMap.set(keyObj, "Value associated with keyObj")
myMap.set(keyFunc, "Value associated with keyFunc")


console.log(myMap.size) // 3

// getting the values
console.log(myMap.get(keyString))
console.log(myMap.get(keyObj))
console.log(myMap.get(keyFunc))

console.log(myMap.get('a string'))
console.log(myMap.get({})) // undefined, because keyObj !== {}
console.log(myMap.get(function(){})) // undefined, because keyFunc !== function () {}