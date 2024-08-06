let randomNumber = Math.floor((Math.random() * 100) + 1);
// console.log(randomNumber);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#userInput');
const guessSlot = document.querySelector('.guessSlot');
const remaining = document.querySelector('.remaining');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.results');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess) {//making sure input value is a number between 1 and 100

    if (isNaN(guess)) {
        alert("Please enter a valid Number")
    }
    else if (guess < 1) {
        alert('Please enter a number greater than 1')
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100');
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        }
        else {
            checkGuess(guess);

        }

    }
}

function checkGuess(guess) { //check the number if predicted number is true or not
    if (guess === randomNumber) {
        displayMessage(`Congratulation! You guessed the correct number in ${numGuess} attempts`);
        endGame();
    }
    else if (guess > randomNumber) {
        displayMessage('Wrong! Guess a smaller number');
        displayGuess(guess);
    }
    else if (guess < randomNumber) {
        displayMessage('Wrong ! Guess a larger Number');
        displayGuess(guess);
    }
}

function displayGuess(guess) {//display all the precvious guesses
    userInput.value = ``;
    guessSlot.innerHTML += ` ${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}  `;
}

function displayMessage(message) {//show the curent scenario of the game  
    lowOrHigh.innerHTML = `<h2>${message} </h2>`;
}

function endGame() {//end the gam
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {//start the new game
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = Math.floor((Math.random() * 100) + 1);
        // console.log(randomNumber);
        prevGuess = [];
        numGuess = 1;
        playGame = true;
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        displayMessage(" ")
    });

}