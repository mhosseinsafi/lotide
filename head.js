
const assertEqual = require('./assertEqual');

let head = function(arr) {
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = assertEqual;



