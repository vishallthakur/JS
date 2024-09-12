const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 4
// console.log(Math.PI)

const coder = {
    name: "developer",
    email: "developer.com",
    isAvailable: true,
    purchase: function () {
        console.log("Purchases are not available");        
    }
}

// console.log(Object.getOwnPropertyDescriptor(coder, "name"));

Object.defineProperty(coder, "name", {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(coder, "name"));


for (let [key, value] of Object.entries(coder)) {
    if (typeof value !== 'function')
    console.log(`${key} : ${value}`);
}



