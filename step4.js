const { sum, subtract } = require('./math.js')

let result, expected
test('sum test', () => {
    result = sum (7,3)
    expected = 10
    expect(result).toBe(expected)
})

test('subtract test', () => {
    result =  subtract(7,3)
    expected = 10
    expect(result).toBe(expected)
})

function expect(actual) {
    return {
        toBe(expected) {
            // console.log('exptected.toBe call')
            if (actual !== expected) {
                throw new Error(`${actual} is not a ${expected}`)
            }
        }
    }
}

function test (title, callback) {
    try {
        callback()
        console.log(` O ${title}`)
    } catch (error) {
        console.error(error)
        console.error(` X ${title}`)
    } finally {
        // console.log('helper function finally')
    }
}