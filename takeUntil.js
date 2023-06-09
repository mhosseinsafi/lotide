
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const result = [];
  for (const element of array) {
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
  return result;
};

module.exports = takeUntil;
