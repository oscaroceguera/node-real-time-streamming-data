const original = new Map([
  [1, 'one']
])

const clone = new Map(original)

console.log(clone.get(1)) // one
console.log(original === clone) // false (useful for shallow comparison)

const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
])

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// merge two maps, Thel ast repeated key wins
// spread operator essentially converts a Map to an Array
const merged = new Map([...first, ...second])

console.log(merged.get(1))
console.log(merged.get(2))
console.log(merged.get(3))