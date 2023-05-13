
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const eqObjects = function(obj1,obj2) {
  let flag = true;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    flag = false;
  }
  for (const x in obj1) {
    if (!obj2[x]) {
      flag = false;
    }
    if (!Array.isArray(obj1[x])) {
      if (obj1[x] !== obj2[x]) {
        flag = false;
      } else {
        if (!eqArrays(obj1[x],obj2[x])) {
          flag = false;
        }
      }
    
    } return flag;
  }
};

module.exports = eqObjects;
