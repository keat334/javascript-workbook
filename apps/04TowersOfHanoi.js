'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var stacks = {
    a : [4, 3, 2, 1],
    b: [],
    c: []
};

function reset(){
 stacks = {
    a : [4, 3, 2, 1],
    b: [],
    c: []
 };

}

reset();

function printStacks() {
    console.log(" ");
    console.log("a : " + stacks.a );
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
    console.log(" ");
}

function movePiece(startStack,endStack) {
   stacks[endStack].push(stacks[startStack].pop());
   

}

function isLegal(startStack, endStack) {
   
   if(startStack != 'a' && startStack != 'b' && startStack != 'c')
{
    return false
}
if(endStack != 'a' && endStack != 'b' && endStack != 'c')
{
    return false
}
   if(stacks[endStack].length === 0)
  {
    return true
}
  if(stacks[startStack][stacks[startStack].length -1] < stacks[endStack][stacks[endStack].length -1]){
    
    return true
  }
  
   
  return false
 

}

function checkForWin() {
    if(stacks.b.length === 4 || stacks.c.length === 4){
        console.log(" ");
        console.log("YOU WIN!!!");
        console.log(" ");

        reset();
    }

}



function towersOfHanoi(startStack, endStack) {
    // Your code here
    if(isLegal(startStack,endStack))
    {
        movePiece(startStack,endStack);
        checkForWin();
    }
    else{
     console.log(" ");
     console.log(" You suck at the game");
     console.log(" ");

    }

}

function getPrompt() {
    printStacks();
    console.log("Case sensitive");
    rl.question('Start Tower: ', (startStack) => {
        rl.question('End Tower: ', (endStack) => {
            towersOfHanoi(startStack, endStack);
            getPrompt();
        });
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#towersOfHanoi()', function () {
        it('should be able to move a block', function () {
            towersOfHanoi('a ', 'b');
            assert.deepEqual(stacks, { a : [4, 3, 2], b: [1], c: [] });
        });
    });

    describe('#isLegal()', function () {
        it('should not allow an illegal move', function () {
            stacks = {
              a : [4, 3, 2],
              b: [1],
              c: []
            };
            assert.equal(isLegal('a ', 'b'), false);
        });
        it('should allow a legal move', function () {
            stacks = {
              a : [4, 3, 2, 1],
              b: [],
              c: []
            };
            assert.equal(isLegal('a ', 'c'), true);
        });
    });
    describe('#checkForWin()', function () {
        it('should detect a win', function () {
            stacks = { a : [], b: [4, 3, 2, 1], c: [] }
            assert.equal(checkForWin(), true);
            stacks = { a : [1], b: [4, 3, 2], c: [] }
            assert.equal(checkForWin(), false);
        });
    })
} else {

    getPrompt();

}