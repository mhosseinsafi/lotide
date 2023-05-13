
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  for (const num in sentence) {
    if (sentence[num] !== " ") {
      if (!results[sentence[num]]) {
        results[sentence[num]] = [num];
      } else {
        results[sentence[num]].push(num);
      }
    }
  }
  return results;
};

module.exports = letterPositions;


 

