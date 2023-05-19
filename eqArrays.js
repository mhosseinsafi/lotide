
const assertEqual = require('./assertEqual');

let eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) { //to check the length of the arrays.
    return false;
  }
  let i = 0;
  while ((i < arr1.length) && (arr1[i] === arr2[i])) {
    i++;
  }
  if (i === arr1.length) { // if i couldnt make it to the end it means one of the indices were not equal.
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;


