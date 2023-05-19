
const assertEqual = require('./assertEqual');


const findKeyByValue = function(obj, str) {
  for (let x in obj) {    // compares the value obj[x]
    if (str === obj[x]) {  // if matching value found , returns the key
      return x;
    }
  }
};

module.exports = findKeyByValue;
