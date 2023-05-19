
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  for (const num in sentence) {   //loop to iterate each index of num in the sentence
    if (sentence[num] !== " ") {  // checks if the current character is not a space character
      if (!results[sentence[num]]) {  // if character is not a space, check if it is in result object
        results[sentence[num]] = [num];  //
      } else {
        results[sentence[num]].push(num);
      }
    }
  }
  return results;
};

module.exports = letterPositions;


 

