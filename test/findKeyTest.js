
const assert = require('chai').assert;
const findKey   = require('../findKey');

describe('findKey', function() {
  const testData = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it('should return the key', function() {
    const result = findKey(testData, x => x.stars === 2);
    assert.equal(result, "noma");
  });
});

// const result = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);


// console.log(result); // "noma"