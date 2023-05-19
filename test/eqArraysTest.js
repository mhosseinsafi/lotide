
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe('eqArrays', () => {
  it('should return true for equal arrays', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('should return false for unequal arrays', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
});


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);