const assertEqual = require('./assertEqual');

let tail = function(arr) {
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    x[i - 1] = arr[i];
  }
  return x;
};


module.exports = tail;