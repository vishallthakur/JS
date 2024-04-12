//  Primitive

/*
    String
    Number
    Boolean
    null
    undefined
    Symbol
    Bigint
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id, id === anotherId)


const bigNumber = 34535685479851258958523n
// console.log(typeof bigNumber)

// Reference (Non primitive)

/* 
    Array
    Object
    Function
*/

const heros = ["Ironman", "Spiderman", "Loki"]

let myObject = {
    name: "vishal",
    age: 24,
}

const myFunction = function() {
    console.log("Hello World!")
}

// console.log(typeof heros)


// =========================== Memory ===============================

// Stack (Primitive), Heap (Non-Primitive)

let testName = "vishal";

let anotherName = testName;
anotherName = "himanshu"

// console.log(testName);
// console.log(anotherName);

let userOne = {
    email: "user1@mail.com",
    upi: "user1#ybl"
}

let userTwo = userOne

userTwo.email = "user2@mail.com" // change in actual value

console.log(userOne)
console.log(userTwo)