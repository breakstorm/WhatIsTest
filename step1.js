
const { sum, subtract } = require('./math.js')
let actual = true;
let exptected = false;

actual = sum(3, 7);
exptected = 10;

if (actual !== exptected) {
    throw new Error(`${actual} is not  ${exptected}`)
}

actual = subtract(7, 3);
exptected = 4;

if (actual !== exptected) {
    throw new Error(`${actual} is not  ${exptected}`)
}

console.log('end')