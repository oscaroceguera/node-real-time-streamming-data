const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a')) // expected output: 1

map1.set('a', 97)

console.log(map1.get('a')) // expected output: 97
console.log(map1.size) // expected output: 3

map1.delete('b')

console.log(map1.size) // expected output: 2

const contacts = new Map()
contacts.set('Jessie', {phone: '123-123-321433', address: '123 N 1st AVE'})
console.log(contacts.has('Jessie'))
console.log(contacts.has('Jessie')) // true
console.log(contacts.get('Hilary')) // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
console.log(contacts.get('Jessie')) // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1