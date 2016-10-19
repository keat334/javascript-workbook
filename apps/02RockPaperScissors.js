'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
hand1 = hand1.toLowerCase()
hand2 = hand2.toLowerCase() 

if (hand1 !== 'rock' && hand1 !== 'paper' && hand1 !== 'scissors'){
console.log("Try again");
}
if (hand2 !== 'rock' && hand2 !== 'paper' && hand2 !== 'scissors'){
console.log("Try again");
}
/*
else if (hand2 !== 'rock' || hand2 !== 'paper' || hand2 !== 'scissors'){
return null;
}
hand1 = hand1.toLowerCase()
hand2 = hand2.toLowerCase() 
*/

  // Write code here
if (hand1 === hand2) {
  return "It's a tie!";
}

if (hand1 === 'rock') {
  if (hand2 === 'scissors') {
    return  hand1 +' wins!';
  }
  if (hand2 === 'paper'){
  // If we reach here, player 2 must have dealt paper
  return hand2 + ' wins!';
  }
}

if (hand1 === 'paper') {
  if (hand2 === 'rock') {
   return  hand1 +' wins!';
  }
   return hand2 + ' wins!';
  // fill this in using the logic above

}

if (hand1 === 'scissors') {
  if (hand2 === 'paper') {
    return  hand1 +' wins!';
  }
  return hand2 + ' wins!';
  // fill this in using the logic above  

}
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', function () {
    it('should detect a tie', function () {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', function () {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
