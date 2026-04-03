const name = "Deeksha H A"
const repoCount = 50

// console.log(repoCount +" "+ name);

console.log(`Hello My name is ${name.toUpperCase()} and My Repo Count is ${repoCount}`) // String interpolation

const bike = new String("Royal Enfield|hunter 350")

console.log(bike[0])
console.log(bike.__proto__)

console.log(bike.length)
console.log(bike.toUpperCase())
console.log(bike.charAt(4))
console.log(bike.indexOf('t'))

const model = bike.substring(bike.indexOf('|')+1)
console.log(model)

const revString = bike.slice(4,-8) // in slice : If start > end → result = "" (empty string)
console.log(revString)

const data = " Manabendu "
console.log(data.trim())

const url = "https://riku.com/manabendu%20karfa"
console.log(
url.replace('%20','-'))
console.log(url.includes('riku'))

const fruits = "Mango, Orange, Grapes, Guava"
console.log(fruits.split(","))