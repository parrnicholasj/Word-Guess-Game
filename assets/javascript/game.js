var tries = 5;
var lettersGuessed = [];
var wins;
var losses;
var userGuess;
var wordPool = ["doom", "argent", "energy", "marine", "demons"]
var word = "test";
var wordArray = [];
var gameOn = false; //need to update this later

var $game = document.getElementById("game");
var $holder = document.getElementById("holder");

document.onkeyup = function (event) {
  if (gameOn) {

    userGuess = event.key.toLowerCase(); //set to lower case so no capitals problem
    console.log(userGuess);

    lettersGuessed.push(userGuess); //add key to array

    //var $game = document.getElementById("game");
    $game.textContent = "You guessed " + userGuess; //tell what they just guessed

    var newDiv = document.createElement("div");

    newDiv.textContent = "guessed letters: " + lettersGuessed;

    $game.appendChild(newDiv); //add on to what letters were guess

    //check if correct letter chosen


  }

  if (!gameOn) {

    //first key press sets the word to be used

    //word = wordPool[Math.floor(Math.random() * wordPool.length)];   //disabled for testing !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //set the blank word segment

    //var $game = document.getElementById("game");

    for (var i = 0; i < word.length; i++) {

      wordArray.push(word.charAt(i));

      var blankSpan = document.createElement("span");
      blankSpan.setAttribute("class", "letterSpace");
      blankSpan.textContent = "-";
      $holder.appendChild(blankSpan);

      console.log(wordArray);
    }

    gameOn = true;

  }

}