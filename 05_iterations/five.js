const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item, index) {
    // console.log(item, index);
});

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

function print_me(item) {
    console.log(item)
}

// coding.forEach(print_me)

const myCoding = [
    {
        language: "Javascript",
        languageFileName: "js"
    },
    {
        language: "Java",
        languageFileName: "java"
    },
    {
        language: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})