
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const flatten = function(arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (!Array.isArray(arr[i])) {
      output.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++){
        output.push(arr[i][j]);
      }
    }
  }
  console.log(output);
  return output;
};

module.exports = flatten;

