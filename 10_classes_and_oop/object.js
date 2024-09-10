function multipleBy5 (num) {
    this.num = num
    return num+5
}

multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

function createUser (username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used : 

A new object is created: The new keyword initialise the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and ethods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specification arguments and this is bound to the newly created object. If no explicit retun value is specified for the constructor, JavaScript assume this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been claaed, if it does't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/