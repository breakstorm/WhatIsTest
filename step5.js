const { sum, subtract } = require('./math.js')

test('sum : add numbers', () => {
    const result = sum(7,3)
    const expected = 10
    expect(result).toBe(expected)
})

test('subtract : subtracts numbers', () => {
    const result = subtract(7, 3)
    const expected = 10
    expect(result).toBe(expected)
})