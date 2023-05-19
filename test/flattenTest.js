
const assert = require('chai').assert;
const flatten   = require('../flatten');
const assertEqual   = require('../assertEqual');
const eqArrays   = require('../eqArrays');

describe('flatten', function() {
  it('should flatten an array', function() {
    const result = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
});

// assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]),true); // => [1, 2, 3, 4, 5, 6]