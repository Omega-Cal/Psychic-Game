
var id="game" 

var computerChoices = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = [];
var computerGuess = [];

function reset () {
    guessesLeft = 9;

    yourGuesses = [];
    var randomGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(randomGuess);
    console.log(computerGuess[0]);
}
reset();

document.onkeyup = function(event) {
    var userGuess = event.key;
    yourGuesses.push(userGuess);
    console.log(computerGuess[0]);
    

if ((userGuess === computerGuess[0]) && (guessesLeft > 0)) {
    wins++;
    guessesLeft = 9;
    yourGuesses.length = 0;
    computerGuess.lenght = 0;
    var randomGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(randomGuess);
    console.log(computerGuess[0]);

}

else if ((userGuess !== computerGuess)) {
    losses++;
    guessesLeft = guessesLeft-1;

}

else {
    losses++;
    guessesLeft = 9;
    yourGuesses.length = 0;
    computerGuess.length = 0;
    var randomGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(randomGuess);
    console.log(computerGuess[0]);
}

if (guessesLeft === 0) {

    alert ("Sorry, maybe next time.")
    reset();
}
    var html = 
            "<p>Take a random guess: " +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + yourGuesses + "</p>"


    document.querySelector("#game").innerHTML = html;
}
