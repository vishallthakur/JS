const userEmail = "rs@vishal.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email")
}

// falsy values :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value :
// "0", "false", " ", [], {}, function(){}

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }
