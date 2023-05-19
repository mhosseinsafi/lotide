const assert = require('chai').assert;
const without = require('../without');
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


describe('without', function() {
  it('should return a new array without the specified items', function() {
    const data = without([1, 23, 3, "hello"], ["hello"]);
    assert.isTrue(eqArrays(data, [1, 23, 3]));
  });

  it('should return a new array without modifying the original array', function() {
    const input = [1, 2, 3];
    const itemsToRemove = [1];
    const result = without(input, itemsToRemove);
    assert.deepEqual(result, [2, 3]);
    assert.deepEqual(input, [1, 2, 3]); // Original array should remain unchanged
  });

  it('should handle arrays with mixed data types', function() {
    const data = without(["1", "2", "3"], [1, 2, "3"]);
    assert.isTrue(eqArrays(data, ["1", "2"]));
  });
});

// const data = without([1,23,3, "hello"], ["hello"]);

// //should pass
// assertEqual(eqArrays(data, [1,23,3]), true);

// //should fail
// assertEqual(eqArrays(data, [1,23]), false);

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]