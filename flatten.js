
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const flatten = function(arr) {
  const output = [];   // empty array to store the flattened elements
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (!Array.isArray(arr[i])) {  // usuing the method Array.isArray() to check if arr[i] is not an array
      output.push(arr[i]);         // if not an array pushes into output
    } else {                     // if an array enters the loop
      for (let j = 0; j < arr[i].length; j++){
        output.push(arr[i][j]);
      }
    }
  }
  console.log(output);
  return output;
};

module.exports = flatten;

