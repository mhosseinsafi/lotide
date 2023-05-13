
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const without = function(input, itemsToRemove) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    if (!itemsToRemove.includes(input[i])) {
      output.push(input[i]);
    }
  }

  return output;
};

module.exports = without;


