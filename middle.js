

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  
  const isOddLength = array.length % 2 === 1;
  
 
  const middleIndex = Math.floor(array.length / 2);
  
  if (isOddLength) {
    
    return [array[middleIndex]];
  } else {
    
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

module.exports = middle;

