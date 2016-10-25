'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

var playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function toggleSwitch() {
  playerTurn = (playerTurn === 'X') ? 'O' : 'X';
}




function horizontalWin() {
  // Your code here
 
  if(
    (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn)||
    (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn)||
    (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)
  ){
    console.log("player wins"); 
    console.log(""); 
      return true;
    }
    else{
      return false;
    };


}

function verticalWin() {
  // Your code here
   if(
    (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn)||
    (board[0][1] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn)||
    (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)
  ){
    console.log("Player wins");
    console.log("");
      return true;
    }
    else{
      return false;
    }
}

function diagonalWin() {
  // Your code here
  if(
    (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
    (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)
  ){
    console.log("Player Wins!");
    console.log(" ");
    return true;
  }
  else{
    return false;
  }
}

function checkForWin() {
 /*
  horizontalWin();
  verticalWin();
  diagonalWin();
  console.log("Player ", playerTurn, " Wins!");
*/

  if (horizontalWin() || verticalWin() || diagonalWin()) {
      console.log('Player ' + playerTurn + ' Wins!');
      return true;
    }
  // Your code here
}

function ticTacToe(row, column) {
  //start here, row might be 1, column might be 2
  //check and see what row and column was selected
  //insert pkayerTurn into selected row
  //Switch to other player
  //repeat
  if(!row || !column || !board[row][column]) {
    console.log("Invalid number");
  } else if (board[row][column] === ' ') {
    board[row][column] = playerTurn;
    checkForWin();
    toggleSwitch();
  }
  /*
 if(!row || !column || !board[row][column]) {
   console.log("Invalid number");
 } else if (board[row][column] === ' ') {
   board[row][column] = playerTurn;
   checkForWin();
   
   playerTurn = (PlayerTurn === 'X') ? 'O' : 'X';
 }
 else{
   console.log('that spot is taken, try again');
 }
 */

/*
if(board[0][0]){
  console.log("wrong");
  board[row][column] = playerTurn;
}
*/
  //board[row][column] = playerTurn;
  
//board[row][column] = playerTurn;
//checkForWin();


//toggleSwitch();


  // Your code here

  //puts the x or o in the array 
  //and then checks if there is a winner
  //change whos turn it is
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', function () {
    it('should place mark on the board', function () {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', function () {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', function () {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', function () {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', function () {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', function () {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
