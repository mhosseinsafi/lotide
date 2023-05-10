

// let eqArrays = function(arr1,arr2) {
//   let flag = true;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       flag = false;
//     }
//     if (arr1.length !== arr2.length) {
//       flag = false;
//     }
//   } return flag;
// };

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1,arr2)) {
    console.log(`🍏🍏Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🍎🍎Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);

