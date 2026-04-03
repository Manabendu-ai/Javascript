const accId = 22074 // It cannot be changed
let email = "rikugithub@gmail.com"
var password = "abc@123"
city = "Kolkata"
let state; // If u declare and leave a variable as it is in javascript then it is considered as undefined!

console.log("Account id: " + accId);
console.log("email id: "+email);

email = "technoriku@gmail.com"
console.log("email id: "+email);
city = "Bengaluru"
console.table([accId, email, password, city, state])

/*

    In javascript other than const there are two ways to declare a variable let and var.
    var is not prefferd to use because of it's issue in block scope and functional scope.
    let was introducted to overcome this drawback of var.

    In Js you can even declare a variable without keyword but it is also not recommended.

*/
