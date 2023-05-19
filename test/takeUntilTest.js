const assert = require('chai').assert;
const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

describe('takeUntil', function() {
  it('should return elements', function() {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const expected1 = [1, 2, 5, 7, 2];
    const result1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(result1, expected1);

    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const expected2 = ["I've", "been", "to", "Hollywood"];
    const result2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(result2, expected2);
  });
});

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);