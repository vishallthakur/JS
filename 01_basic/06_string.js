const name = "vishal"
const age = 24

// console.log(name + age + "value");

// console.log(`Hello, my name is ${name} and my age is ${age}`);

const gameName = new String("VishalGT");

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(9));
// console.log(gameName.indexOf("T"));


const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "    vishal   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://vishal.com/vishal%20thakur"

// console.log(url.replace("%20", "-"))
// console.log(url.includes("visha1l"))

console.log(gameName.split("l"))