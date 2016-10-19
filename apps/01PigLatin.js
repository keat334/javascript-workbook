'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/*
So the basic idea of Pig Latin is to take the first letters of the word up to the
 first vowel, move them to the back, and add 'ay' to the end of it.
if the first letter is a vowel just add yay to the end.


we have a word
a,e,i,o,u, y

find the location of a in the word, store it
find the location of e in the word, if the location is before the location of previosuly found vowel, store it
find the location of i in the word, if the location is before the location of previosuly found vowel, store it
.....ect

if the first letter is a vowel just add yay to the end
dont add anything else

//now i know where the loctaion of the first vowel is

i need a new word that only contains the letters up tothe first vowel
i also need a new word that only contains the letters from yhe first vowel

rearrange my words into a new wod with 'ay'
and we are done
*/

function pigLatin(word) {

  // Your code here
  var vowelIndex = word.indexOf('a');


  var eindex = word.indexOf('e');
if (eindex < vowelIndex){
  vowelIndex = eindex;
}

 var iindex = word.indexOf('i');
if (iindex < vowelIndex){
  vowelIndex = iindex;
}
//add var for O,U, Y

if (vowelIndex === 0){
  return word + "yay";
}

var begin = word.splice(0, vowelIndex);
var end = word.splice(vowelIndex, word.length);

return end + begin + 'ay';


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', function () {
    it('should translate a simple word', function () {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', function () {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', function () {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should auto lowercase word before translation', function () {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
