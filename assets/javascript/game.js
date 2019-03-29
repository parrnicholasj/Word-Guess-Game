var tries = 5;
var lettersGuessed = [];
var wins = 0;
var losses = 0;
var userGuess;
var wordPool = ["doom", "argent", "energy", "marine", "demons"]
var word = "test";
var wordArray = [];
var gameOn = false;
var resetGame = false;
var $game = document.getElementById("game");
var $holder = document.getElementById("holder");
var charsToWin;

document.onkeyup = function (event) {
  if (gameOn) {

    userGuess = event.key.toLowerCase(); //set to lower case so no capitals problem



    //var $game = document.getElementById("game");
    $game.textContent = "You guessed " + userGuess; //tell what they just guessed

    var newDiv = document.createElement("div");

    newDiv.textContent = "guessed letters: " + lettersGuessed;

    $game.appendChild(newDiv); //add on to what letters were guess

    //check if correct letter chosen
    if (word.includes(userGuess)) {

      //get indexes of where the characters are and put letters in correct boxes
      if (!lettersGuessed.includes(userGuess)) {
        for (var i = 0; i < wordArray.length; i++) {

          if (wordArray[i] === userGuess) {

            var placeLetter = document.getElementById("letterSpace" + i);
            console.log(placeLetter);
            placeLetter.value = wordArray[i];
            charsToWin--;

          }

        }

        lettersGuessed.push(userGuess);
      }

      //when player wins
      if (charsToWin <= 0) {

        alert("you win");
        wins++;
        gameWon();
        resetGame = true;
        gameOn = false;

      }


    } //only charge tries for unique guesses
    else if (!lettersGuessed.includes(userGuess)) {

      tries--;

      document.getElementById("triesBox").value = "Tries: " + tries;

      lettersGuessed.push(userGuess); //add key to array so it cannot be guessed again

      if (tries <= 0) { //reset the game
        losses++;
        gameLost();
        resetGame = true;
        gameOn = false;
      }

    }

  }

  function gameWon(){

document.getElementById("winsBox").value = "Wins: " + wins;

  }

  function gameLost(){

    document.getElementById("lossesBox").value = "Losses: " + losses;
    
      }

  if (!gameOn) {

    //reset the board

    if (resetGame) {

      $holder.innerHTML = ""; //purge old stuff
      $game.innerHTML = "";


      console.log("clean");
      lettersGuessed = []; //clear for new guesses
      wordArray = [];
      resetGame = false;

    }

    //first key press sets the word to be used

    word = wordPool[Math.floor(Math.random() * wordPool.length)];   //disabled for testing !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    charsToWin = word.length;

    //set the blank word segment

    for (var i = 0; i < word.length; i++) {

      wordArray.push(word.charAt(i));

      var blankSpan = document.createElement("input");
      blankSpan.setAttribute("id", "letterSpace" + i);
      blankSpan.value = "-";
      $holder.appendChild(blankSpan);

      console.log(wordArray);
    }

    tries = 5;
    gameOn = true;

  }

}