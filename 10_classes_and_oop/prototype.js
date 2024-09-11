// let myName = "vishal     "

// console.log(myName.truelength);


let myHeros = ["thor", "hulk"]

let heroPower = {
    thor: "hammer",
    hulk: "strength",

    getthorPower: function () {
        console.log(`Thor power is ${this.thor}`);
    }
}

Object.prototype.vishal = function () {
    console.log(`Vishal is present in all objects`);
}

Array.prototype.heyVishal = function () {
    console.log(`Vishal says hello.`)
}

// heroPower.heyVishal()
// myHeros.heyVishal()
// heroPower.vishal()
// myHeros.vishal()


// Inheritance

const User = {
    username: "Vishal",
    email: "vishal@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "Rishabh     "

String.prototype.trueLength = function () {
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
" vishal    ".trueLength()