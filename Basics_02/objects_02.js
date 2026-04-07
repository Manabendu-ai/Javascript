// Object Singleton

const appUser = {}

appUser.id = "212RK";
appUser.name = "Rakesh Kumar"
appUser.isLoggedIn = true

console.log(appUser)


const regUser = {
    email : "technoriku@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Manabendu",
            lastname : "Karfa"
        }
    }
}

console.table(regUser)
console.log(regUser.fullname?.userfullname?.firstname)

const obj1 = {1: "A", 2: "B", 3: "C"}
const obj2 = {4: "D", 5: "E", 6: "F"}

const obj3 = Object.assign({}, obj1, obj2) // combining two objects
// {} -> the target on which to combine all
console.log(obj3)

const obj4 = {...obj1, ...obj2}

console.log(Object.keys(appUser))
console.log(Object.values(appUser))
console.log(Object.entries(appUser))

// Destructuring
const course = {
    coursename: "DSA self paced",
    price: 1799,
    provider: "gfg"
}

const {coursename : cn} = course
console.log(cn)

