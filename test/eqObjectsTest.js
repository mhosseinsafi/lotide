
const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

describe('eqObjects', () => {
  it('should return true for equal objects', () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });

  it('should return false for unequal objects', () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });
});


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false