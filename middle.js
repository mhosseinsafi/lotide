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

const middle = function(array) {
  
  const isOddLength = array.length % 2 === 1;
  
 
  const middleIndex = Math.floor(array.length / 2);
  
  if (isOddLength) {
    
    return [array[middleIndex]];
  } else {
    
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]