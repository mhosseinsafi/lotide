

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🍏🍏Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎🍎Assertion Failed: ${actual} !== ${expected}`);
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
const counts = letterPositions("lighthouse in the house");
console.log("final counts", counts);
 

