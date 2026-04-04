const batters = ["Shubman Gill", "Shikhar Dhawan", "Martin Guptill", "Travis Head", "Quinton de Kock", "Andre Russell"]
const bowlers = ["Trent Boult", "Mitchell Starc", "Dale Styen", "Scott Boland", "Jasprit Bumrah", "Mohammed Shami"]

// batters.push(bowlers)
// console.log(batters)

// Merging 2 different Arrays
// 1. method 1 : concat
players = batters.concat(bowlers)
console.log(players)
// 2. method 2 : spreading an array into individual elements : ...
players1 = [...batters, ...bowlers]
console.log(players1)

let arr = [1,2,3, [4,5,6],7,[8,[9,10]]]
// let's flat the above arr
let depth = 2
console.log(arr.flat(depth))
console.log(Array.isArray("manabendu"))
console.log(Array.from("manabendu"))
console.log(Array.from({name : "deeksha"})) // Empty Array as it cannot convert an object to array
console.log(Array.of(100, 200, 400))