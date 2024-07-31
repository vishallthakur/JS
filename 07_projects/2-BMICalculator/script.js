const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const result = document.querySelector("#results")
    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)

    if (height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valide height`
    } else if (weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valide weight`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`
    }
})