
const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const results = {};
  const sent = sentence.toLowerCase(); //to make it case sensitive
  for (const char of sent) {
    if (char !== " ") {
      if (!results[char]) { // if char is not a key of object results, results[char] will be false.
        results[char] = 1; //creates char key in object results and set the value to 1. 
      } else {
        results[char]++; // since else is executed it means char is already a key of object results.
      }
    } else {
      console.log("space skipped");
    }

  }
  return results;
};

module.exports = countLetters;

