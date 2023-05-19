
const eqArrays = require('./eqArrays');
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🍏🍏Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎🍎Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// This function compares two values, actual and expected, and logs a passing or failing assertion message depending on whether they are equal.