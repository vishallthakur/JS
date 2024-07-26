const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function (button) {
    // console.log(button)
    button.addEventListener('click', function(event) {
        
        // console.log(button.style.backgroundColor)
        body.style.backgroundColor = event.currentTarget.id
    })
})