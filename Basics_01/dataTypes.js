"use strict" // writing this at the top of a js file treats all the JS code as newer version!
// but today all the js files which are newly created are strict by default!

// alert("Heyy!!") --> We are using Node js not browser

let name = "Deeksha H A" // String
let age = 19; // Int
let cgpa = 9.97 // double
let isStudent = true // boolean
let employementType = null // standalone value
// Symbol => it is used to define uniqueness. Like in react when there are too many components so to
// identify which component is unique etc.

let emp = {
    empId : 112,
    empName: "manabendu karfa",
    age : 19
} // object

console.table(emp);
console.log(typeof emp)
console.log(typeof null); // -> null is an object
console.log(typeof undefined); // -> undefined


/* 
    differnce between undefined and null:
    1) undefined --> It is when we declare a variable but don't assign a value to it.
    2) null --> It is a representation of an empty value.
*/

