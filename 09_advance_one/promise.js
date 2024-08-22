const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed")
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is complete")
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved")
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({ username: "visahl", email: "example.com" })
    }, 1000)
})

promiseThree.then(function (data) {
    console.log(data)
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "visahl", password: "123" })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(() => {
    console.log("The promise is either resolve or rejected")
});


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject("ERROR: JS went wrong")
        }        
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:", error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/vishalthakur')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))