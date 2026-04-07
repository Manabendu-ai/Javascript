// There are two ways to declare an object in javascript 1: literal and 2: is constructor
// Singleton -> always represents one object
// When we declare object using literal then no singleton
// When we declare object using constructor then  always it is a singleton

// Object literals

// How do i declare a Symbol as a key in an object?
// [symbol] : value

const API_KEY = Symbol("Key1")

const user1 = {
    email : "deeksha45@gmail.com",
    name : "deeksha h a",
    [API_KEY] : "nn39n20329jz0a1kks1",
    age : 19,
    company : "Texas Instruments",
    isLoggedIn : true,
    salary : 45_00_000,
    lastLoggedInDays : ["Monday", "Tuesday"]
}

console.table(user1)

console.log(user1.name)
console.log(user1["email"])
console.log(user1[API_KEY])

user1.email = "deekshaha91@texus.com"

user1.greet = function(){
    console.log(`Hello, ${this.name}`);
    
}
console.log(user1.greet())
// Object.freeze(user1) // freeze restricts the specified object from further modification!
console.log(user1)