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

const without = function(input, itemsToRemove) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    if (!itemsToRemove.includes(input[i])) {
      output.push(input[i]);
    }
  }

  return output;
};

const data = without([1,23,3, "hello"], ["hello"]);

//should pass
assertEqual(eqArrays(data, [1,23,3]), true);

//should fail
assertEqual(eqArrays(data, [1,23]), false);

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);



