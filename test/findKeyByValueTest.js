
const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');
const assertEqual   = require('../assertEqual');

describe('findKeyByValue', function() {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('should return the correct key for the value', function() {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('should return undefined if a value is not present in the object', function() {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });
});

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);