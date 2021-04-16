const assert = require('assert')

const { sum, subtract } = require('./math.js')
let result, expected

result = sum(7, 3)
expected = 10
assert.strictEqual(result, expected)

result = subtract(7, 3)
expected = 10
assert.strictEqual(result, expected)

console.log('end')