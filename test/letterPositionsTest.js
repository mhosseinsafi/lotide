
const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');
const assertArraysEqual   = require('../assertArraysEqual');

describe('letterPositions', () => {
  it('should return an object with correct letter positions', () => {
    const result = letterPositions('hello');
    assert.deepEqual(result.e, ['1']);
  });
});


// console.log(letterPositions("hello"));

// assertArraysEqual(letterPositions("hello").e, [1]);