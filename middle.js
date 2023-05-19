

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  
  const isOddLength = array.length % 2 === 1;  // checks if the length is odd
  
 
  const middleIndex = Math.floor(array.length / 2); // calculate the index of the element
  
  if (isOddLength) {
    
    return [array[middleIndex]];  // if it is odd returns a single middle element
  } else {
    
    return [array[middleIndex - 1], array[middleIndex]];   //if it is even returns two middle elements
  }
};

module.exports = middle;

