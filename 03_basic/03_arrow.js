const user = {
    username: "vishal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function code() {
    let username = "vishal"
    console.log(this.username)
}

// code()

const code1 = function code() {
    let username = "vishal"
    console.log(this.username)
}

// code1()

const code2 = () => {
    let username = "vishal"
    console.log(this)
} 

// code2()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "vishal"})

// console.log(addTwo(3, 4));


const myArray = [1, 2, 3, 4, 5]

// myArray.forEach(() => (""))