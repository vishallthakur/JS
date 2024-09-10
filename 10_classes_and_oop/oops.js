const user = {
    username: "vishal",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this)
    },
}


// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function () {
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("vishal", 2, false)
const userTwo = new User("Rishabh", 10, true)

console.log(userOne.constructor);
// console.log(userTwo);
