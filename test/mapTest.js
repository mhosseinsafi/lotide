

const assert = require('chai').assert;
const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

describe('map', () => {
  it('should return an array', () => {
    const words = ["hassan", "ali", "taghi", "naghi", "jamshid"];
    const results = map(words, word => word[0]);
    const expected = words.map(word => word[0]);
    assert.deepEqual(results, expected);
  });
});

// const words = ["hassan", "ali", "taghi", "naghi", "jamshid"];



// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1,words.map(x => x[0]));