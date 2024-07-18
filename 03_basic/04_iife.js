// Immediately Invoked Function Expressions (IIFE)


(function code() {
    // named IIFE
    console.log("DB Connected");
})();

// code()

( (name) => {
    console.log(`DB Connected Two ${name}`)
} )("vishal");