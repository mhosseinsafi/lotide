
let eqArrays = function(arr1,arr2) {
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

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1,arr2)) {
    console.log(`🍏🍏Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🍎🍎Assertion Failed: ${arr1} !== ${arr2}`);
  }
};





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
console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);
 

