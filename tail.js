
// The tail is not the last element of the array. The tail is meant to be every element except the head (first element) of the array.

let tail = function(arr) {
  let x = []; // x is the new variable which saves the new output 
  for (let i = 1; i < arr.length; i++) { // i start from 1 because i purposely want to skip the first element
    x[i - 1] = arr[i];
  }
  return x;
};


module.exports = tail;