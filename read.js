var fs = require("fs");
var inquirer = require("inquirer");

var count;
var max = 26;
var correctCnt = 0;
var lCnt = 0;


fs.readFile("word.txt", "utf8", function(error, data) {
    if (error) {
        console.log(error);
    }
    
    wordArr = data.split(",");

    setUpNewWord();

    gameCheck();

    
    
});

function setUpNewWord() {

    
    word = wordArr[Math.floor(Math.random() * wordArr.length)];
    //console.log(word);
    console.log("The word has " + word.length + " letters.");
    count = word.length;
    //console.log("Count = " + count);
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    console.log(answerArray);
    
    
};

function gameCheck() {
    if (max === lCnt) {
      console.log("Game Over. You did not win. The word is " + word);
      process.exit();
    }
      
    if (correctCnt === count) {
        console.log("Yes, the word is " + word + "!! You Won!! You Won!! You Won!!");
        process.exit();
    }
    playGame();
}
/*function Letter(letterArr, guess, previousGuess, placeholder ) {
    this.letterArr = letterArr;
    this.guess = guess;
    this.previousGuess = function previousGuess {
        for (var k = 0; k < letterArr.lenght; k++) {
            if (k === 0 && letterArr[k] === "") {
                letterArr.push(userGuess);
                return false;
            }
            if (letterArr[k] === userGuess) {
                return true;
            }
        letterArr.push(userGuess);
        return false;        
        }
    };

    }
 };*/
function playGame() {
    inquirer.prompt([
        {
            type: "string",
            name: "userGuess",
            message: "Guess a letter"
        }
    ])
    .then(function(guess) {
        lCnt = lCnt + 1;
        /*if (previousGuess === true) {
            console.log("letter used already");
            gameCheck();
        }*/
        if (lCnt < max || correctCnt < count) {
            console.log("Number of guesses = " + lCnt);
            for (var j = 0; j < count; j++) {
                if (word[j] === guess.userGuess) {
                    answerArray[j] = guess.userGuess;
                    correctCnt = correctCnt + 1;
                    console.log(answerArray);
                    console.log("Number of correct letters = " + correctCnt);
                }
            }
            gameCheck();
        }
   })      
}


    
                
        
            
                
            

