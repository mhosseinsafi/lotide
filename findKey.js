
const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};



module.exports = findKey;




// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//       console.log(`🍏🍏Assertion Passed: ${actual} === ${expected}`);
//   } else {
//       console.log(`🍎🍎Assertion Failed: ${actual} !== ${expected}`);
//   }
// };



