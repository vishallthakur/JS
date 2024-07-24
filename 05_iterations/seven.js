const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)
// console.log(typeof newNums);

const newNums = myNumbers
    .map((num) => num + 1)
    .map((num) => num * 10)
    .filter((num) => num >= 40)

// console.log(newNums);


const myTotal = myNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "java course",
        price: 199
    },
    {
        itemName: "mobile developent course",
        price: 599
    },
    {
        itemName: "data science course",
        price: 1099
    },
]

const totalPrice = shoppingCart.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)

console.log(totalPrice)