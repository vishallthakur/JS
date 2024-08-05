let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesSlot = document.querySelector('.guesses');
const remaningGusses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(event) {
        event.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    }) 
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number')
    } else if(guess <  1) {
        alert('Please enter a number greater than 1')
    } else if(guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess == 11) {
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guess it right`)
    } else if (guess < randomNumber){   
        displayMessage(`The number is too low`)
    } else if (guess > randomNumber){
        displayMessage(`The number is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guesSlot.innerHTML += `${guess}, `
    numGuess++
    remaningGusses.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h4>${message}</h4>`
}

function endGame() {
    playGame = false
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML  = `<h3 id='newGame'>Start New Game<h3>`
    startOver.appendChild(p)
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (event) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guesSlot.innerHTML = ''
        remaningGusses.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}