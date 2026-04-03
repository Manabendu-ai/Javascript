let score = "77abc" // String

console.log(typeof score);

let intScore = Number(score) // String to Number convertion

console.log(typeof intScore);

console.log(intScore); // -> is 77abc is not a Number it will give NaN so we must do conversions very carefully!


let isLoggedIn = 1

let boolIsLogIn = Boolean(isLoggedIn)
console.log(isLoggedIn);

console.log(boolIsLogIn);

/*

    Converting String Integer to Int -> Number
    Converting String to Int -> NaN
    Converting null to Int -> 0
    Converting undefined to Int -> NaN
    Converting boolean to Int -> 1 : true or 0 : false

 */

