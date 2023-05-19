
const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  for (const key in object) {    // loop to iterate each key
    if (callback(object[key])) { // callback function with the value object[key] as an argument
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



