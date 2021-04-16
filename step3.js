const { sum, subtract } = require('./math.js')

let result, expected

result = sum (7,3)
expected = 10
expect(result).toBe(expected)


result =  subtract(7,3)
expected = 10
expect(result).toBe(expected)

function expect(actual) {
    return {
        toBe(expected) {
            console.log('exptected.toBe call')
            if (actual !== expected) {
                throw new Error(`${actual} is not a ${expected}`)
            }
        }
    }
}