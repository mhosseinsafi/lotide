const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🍏🍏Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎🍎Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  let flag = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      flag = false;
    }
    if (arr1.length !== arr2.length) {
      flag = false;
    }
  } return flag;
};

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

assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]),true); // => [1, 2, 3, 4, 5, 6]