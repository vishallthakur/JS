function addTwoNumbers(number1, number2) {
    return number1 + number2
}

// console.log(addTwoNumbers(3, 4));

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Vishal",
    age: 20,
}

function handleObjecy (anyObject) {
    console.log(`Username is ${anyObject.username} and the age is ${anyObject.age}.`);
}

handleObjecy(user);