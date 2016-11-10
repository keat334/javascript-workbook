'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//we need to pass in a string into this class function
//the value will either be black or white
//it will only be one of these two words
function Checker(color) {
  // Your code here
  this.symbol = null;
  if(color === 'white'){
    this.symbol = String.fromCharCode(0x125CB);
  }else{
    this.symbol = String.fromCharCode(0x125CF);
  }
  //here i need to set the property called "symbol"
  //this.symbol = String.fromCharCode(0x125);
 /*
  if(color = 'white'){
    this.symbol = String.fromCharCode(0x125CB);
  } else{
    this.symbol = String.fromCharCode(0x125CF);
  }
*/

  //but i cant set it just ourtright
  //if the color is white set it to String.fromCharCode(0x125CB)
  //if the color is the other set it to String.fromCharCode(0x125CF)
}

function Board() {
//create property called checkers and assign it an empty array
this.checkers = [];
//create amethod called 'createCheckers'
this.createCheckers = function() {
  var whitePositions = [
    [0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]
  ];
  var blackPositions = [
    [5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]
  ];

  //we notice we need to do something for everything that inside teh arrays above
  for(var i = 0; i < whitePositions.length; i++){

   var position = whitePositions[i];

   //what is in position
   // an arrow it something like [0,1]
  
   //what is the point of having a reference to position
   //to get the row and column out of it
    var row = position[0];
    var column = position[1];

    var checker = new Checker('white');

    this.grid[row][column] = checker;

    //push your checkers into this.Checkers
  this.checkers.push(Checker);
  //i cannot hard code the row and column 
  //where do i dynamically get row and column
  }
  for(var i = 0; i < blackPositions.length; i++){

   var position = blackPositions[i];

   //what is in position
   // an arrow it something like [0,1]
  
   //what is the point of having a reference to position
   //to get the row and column out of it
    var row = position[0];
    var column = position[1];

    var checker = new Checker('black');

    this.grid[row][column] = checker;

    //push your checkers into this.Checkers
    this.checkers.push(checker);
  //i cannot hard code the row and column 
  //where do i dynamically get row and column
  }
}
  //how do i put a checer on the grid
  //for exampl row 0 column 0 put an "X"
  //grid[0][0] = ("X");

  //instantiate a 'white' Checker
 // checker = new Checker('white');
//push your checkers into this.Checkers
  //checkers.push(Checker);



  //this was the code given to us
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (var row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (var column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  };

  // prints out the board
  this.viewGrid = function() {
    // add our column numbers
    var string = "  0 1 2 3 4 5 6 7\n";
    for (var row = 0; row < 8; row++) {
      // we start with our row number in our array
      var rowOfCheckers = [row];
      // a loop within a loop
      for (var column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };

}
  // Your code here
  this.selectChecker = function(row, column){
    return this.grid;
}
function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    this.board.createCheckers();
    // Your code here
  };
  //start might look lik ethis '90'
  //end might look like this '89'
  this.moveChecker = function(start, end){
    //we need to send in row and column to selectChecker
    var startrow = start.split('')[0];
    var startcolumn = start.split('')[1];
    var endrow = end.split('')[0];
    var endcolumn = end.split('')[1];

    var checker = this.board.selectChecker(startrow, startcolumn);
    var endchecker = this.board.selectChecker(endrow, endcolumn);


//we are removing the checker from teh grid
//the grid is in a property called 'grid'
//we represent removing it by settingthe row/column to null

this.board.grid[startrow][startcolumn] = null;
this.board.grid[endcolumn][endrow] = endchecker;



//    grid[startrow][startcolumn] = null;

    //Then set that spot on the grid to null and set the 
    //spot at the end rowcolumn coordinate to the checker.

//Inside the method, use your board helper
// method selectChecker to select the checker at your starting 
//rowcolumncoordinates and set it to a local variable checker


  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?(x,y): ', (start) => {
    rl.question('to where?(x,y): ', (end) => {
      game.moveChecker(start, end);
      getPrompt();
    });
  });
}

var game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', function() {
    it('should have a board', function() {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', function() {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', function() {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
