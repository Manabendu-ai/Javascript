// Array is Js is a data structute that stores collection of values
// Array in Js is resizable and can contain mix of different data types

const fruits = ["mango", "orange", "grape", "guava", "pineapple"]
console.log(fruits);
console.table(fruits)
console.log(fruits[3])

const myDetails = [64, "Manabendu", 8.5]
console.log(myDetails) 
myDetails.push(9980103912)
console.log(myDetails)

myDetails.pop()
console.log(myDetails)

myDetails.unshift("AIML") // Adds to the first of the list
console.log(myDetails)

myDetails.shift() // Removes the first element
console.log(myDetails)

console.log(myDetails.includes(64))
console.log(myDetails.indexOf(8.5))
console.log(myDetails.join()) // Converts Array to String

// slice, splice

const nums = [12,17,19,25,53]
console.log(`nums : ${nums}`)

const x = nums.slice(1, 3)
console.log(`nums : ${nums}`)
console.log(x)

const y = nums.splice(1, 3)
console.log(`nums : ${nums}`)
console.log(y)

/**
    
    The only difference between slice and splice is that:
    slice : extract a portion from the original array but does'nt modify the array (start : inc, end : exc)
    splice: does the same as slice but it removes the portion from the arrat modifying the original array (start: inc, end: inc)


 */
