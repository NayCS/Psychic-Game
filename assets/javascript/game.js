// The game will choose a letter from this array
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// The chosen letter for this game will be held in this variable
var letterToGuess = letters[Math.floor(Math.random() * letters.length)];

// The letter guessed by the user
var userGuess;

// This holds the number of guesses the user has left. Show the count to the user.
var guessesLeft = 9;

// Convert user guess to lowercase
function cleanInput(input) {

  var letter;
  letter = input.charAt(0);
  letter = letter.toLowerCase();
  return letter;

}

// play the round until letter is guessed or out of guesses
while ( (userGuess !== letterToGuess) && (guessesLeft > 0) ) {

  // get the user's guess from the keyboard
  userGuess = prompt("Guess a Letter");

  // clean the input to get a single, lowercase letter and show to the user
  userGuess = cleanInput(userGuess);
  document.querySelector("#guesses-so-far").innerHTML += (userGuess + " ");

  // reduce the number of guesses
  guessesLeft--;
  document.getElementById("#guesses-left").innerHTML = guessesLeft;
}

// Game over, add code for winner!
if (userGuess === letterToGuess) {
  alert("You Won!!!");

// Add code for loser
} else {
  alert("You lost :(");
}
