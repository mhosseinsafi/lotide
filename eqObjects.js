let eqArrays = function(arr1,arr2) {
  let flag = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      flag = false;
    }
    if (arr1.length !== arr2.length) {
      flag = false;
    }
  } return flag;
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🍏🍏Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎🍎Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
