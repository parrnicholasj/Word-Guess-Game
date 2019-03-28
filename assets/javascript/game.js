var tries = 5;
var lettersGuessed = [];
var wins;
var losses;
var userGuess;
var word;
var gameOn = true;//need to update this later

document.onkeyup = function (event) {
  if (gameOn) {

    userGuess = event.key.toLowerCase();

    lettersGuessed.push(userGuess)

    var targetDiv = document.getElementById("game");
    targetDiv.textContent = "You guessed " + userGuess;
    // In this example, we instead create a new div called "newDiv".
    var newDiv = document.createElement("div");
    // We then give this newDiv the text "A pleasure to meet you!".
    newDiv.textContent = "A pleasure to meet you!";
    // Now we use the ".appendChild" method to combine the two divs together on the page.
    targetDiv.appendChild(newDiv);

  }

}