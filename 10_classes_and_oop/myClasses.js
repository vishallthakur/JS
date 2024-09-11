// ES6

// class User {
//     constructor (username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
    
//     encryptPassword () {
//         return `${this.password}.abc`
//     }
    
//     changeUsername () {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const code = new User("code", "code.com", 123)

// console.log(code.encryptPassword());
// console.log(code.changeUsername());


// behind the scene

function User (username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}.abc`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const coder = new User("coder", "coder.com", 456)

console.log(coder.encryptPassword());
console.log(coder.changeUsername());

