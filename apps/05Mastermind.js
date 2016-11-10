'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

var move;

function printBoard() {
  for (var i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution(solution, guess) {
 
  for (var i = 0; i < 4; i++) {
    var randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
  

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  // your code here
  
  solution = 'abce'
  var numberOfCorrectLetterLocations =0;
  var numberOfLettersInWrongLocation =0;
  var solutionArray = solution.split('');
  var guessArray = guess.split('');

  for(var i =0; i < solutionArray.length; i++)
  {
    if(solutionArray[i] === guessArray[i])
    {
      numberOfCorrectLetterLocations ++;
      solutionArray[i] = null;
    }
  }

  for(var i =0; i < solutionArray.length; i++)
  {
    if(solutionArray.indexOf(guessArray[i]) > -1){

    }    numberOfLettersInWrongLocation ++;
    solutionArray[i] = null;
  }
}
}

function mastermind(guess) {
  // your code here
  move++
  if(guess == solution){
    return "Whatever"
  }
  generateHint()
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log( mastermind(guess) );
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#mastermind()', function () {
    it('should register a guess and generate hints', function () {
      solution = 'abcd';
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', function () {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', function () {
    it('should generate hints', function () {
      assert.equal(generateHint('abcd', 'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', function () {
      assert.equal(generateHint('abcd', 'aabb'), '1-1');
    });

  });

} else {

 //  generateSolution();
  getPrompt();
}
