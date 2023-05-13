
const assertEqual = require('./assertEqual');


const findKeyByValue = function(obj, str) {
  for (let x in obj) {
    if (str === obj[x]) {
      return x;
    }
  }
};

module.exports = findKeyByValue;
