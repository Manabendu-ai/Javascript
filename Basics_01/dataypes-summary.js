// Javascript is a dynamically typed language
// Types of DataTypes

// 1. primitive : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreMet = 0.4
const isLiable = false
const outsideTemp = null
const userId1 = Symbol("123")
const userId2 = Symbol("123")
const bigNumber = 1342424858238n
// here userId1 and userId are unique and have different values

console.log(userId1 === userId2);

// Non-premitive (Reference) : Array, Objects, Functions

// 1. Arrays
const food = ["Pasta", "Pizaza", "Burger"]
console.table(food)

// 2. Objects 
let myObj = {
    name : "Deeksha H A",
    age : 19,
    dept : "ISE",
    clg : "CMRIT"
}
console.table(myObj)

// 3. Functions

const greet = function(master) {
    console.log("Welcome "+master+"!")
}

greet("Deeksha H A");