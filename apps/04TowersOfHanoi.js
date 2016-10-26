'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



var stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  // Your code here
  //pop varriable stacks
  //push to new stack
  //check if smaller one is under new pop

  //get a piece off the top of the startStack and save it
  //move it to the endStack

}

function isLegal(startStack, endStack) {
  // Your code here
  //get a reference to the actual startStack and save it
  //save into variable
  //does start stack have anything in it??
  //get a reference to the actual endStack and save it

  // is the piece from the start stack bigger or smaller than the piece on
  //top of the endStack
  //is there anything even in the end stack

  // if bad return something
  // if good return something else
  //
  //is the piece on top bigger or smaller than the piece on bottom

}

function checkForWin() {
  // Your code here
  // does stack 'c' have a length of 4? using .length
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  //check is value is smaller or bigger the one being placed
  //check if the move is ok
  //if its okay make the move

  //did the player win yet??
  


}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', function () {
    it('should be able to move a block', function () {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', function () {
    it('should not allow an illegal move', function () {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', function () {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', function () {
    it('should detect a win', function () {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
