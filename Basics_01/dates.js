let dob = new Date()

console.log(dob.toString()) // Sat Apr 04 2026 09:43:49 GMT+0530 (India Standard Time)
console.log(dob.toDateString()) // Sat Apr 04 2026
console.log(dob.toLocaleDateString()) // 4/4/2026
console.log(dob.toLocaleString()) // 4/4/2026, 9:43:49 AM
console.log(dob.toJSON()) // 2026-04-04T04:15:09.385Z
console.log(typeof dob) // object

// let myDate = new Date(2025, 5, 24)
// let myDate = new Date(2025, 5, 24, 7, 8)
// let myDate = new Date("2023-01-14")
let myDate = new Date("01-14-2023")
// console.log(myDate);

let myTimeStamp = Date.now() // Time in millisecond from 1 Jan 1970
console.log(myTimeStamp)
console.log(myDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDate())

newDate.toLocaleString("default", {
    weekday : "long"
})