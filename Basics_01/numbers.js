const score = 400

let bal = new Number(100)
console.log(bal)

console.log(bal.toString().length)
console.log(bal.toFixed(2))

const bmi = 23.8773
console.log(bmi.toPrecision(3))

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN')) // 1,00,00,000

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.EPSILON)

console.log(Math.abs(-77))
console.log(Math.round(5.76))
console.log(Math.floor(4.88)) 
console.log(Math.ceil(4.13))

console.log(Math.min(3,8,9,11,2))
console.log(Math.max(3,8,9,11,2))

console.log(Math.random()) // Always throws value between 0 and 1
console.log(((Math.random())*10)+1)
console.log(Math.floor((Math.random())*10)+1)

// Formula to generate numbers between a range:
const min = 1;
const max = 6;

let num = Math.floor(Math.random()*(max - min + 1)+min)
console.log(num)
