
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// This function compares two arrays, arr1 and arr2

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1,arr2)) {
    console.log(`🍏🍏Assertion Passed: ${arr1} === ${arr2}`); // if the arrays are equal
  } else {
    console.log(`🍎🍎Assertion Failed: ${arr1} !== ${arr2}`); // if the arrays are not equal
  }

  return eqArrays(arr1, arr2);
};

module.exports = assertArraysEqual;