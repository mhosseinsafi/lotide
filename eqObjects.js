
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function(obj1,obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) { //to check the length of the object.
    return false;
  }
  for (const x in obj1) { // x is indices of the obj1.
    if (!obj2[x]) {  // if index x is not an index of obj2 , obj2[x] will be false.
      return false;
    }
    if (!Array.isArray(obj1[x])) { // to check if the value of index x of obj1 is an array.
      if (obj1[x] !== obj2[x]) {
        return false;
      } else {
        if (!eqArrays(obj1[x],obj2[x])) {
          return false;
        }
      }
   
    } return true; // if none of the above returns executed it means two objects are equal.
  }
};
module.exports = eqObjects;
