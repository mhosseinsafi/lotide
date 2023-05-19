
const assert = require('chai').assert;
const assertObjectsEqual   = require('../assertObjectsEqual');


describe("#assertObjectsEqual", () => {
  it("returns { a: 1, b: 2 } for { a: 1, b: 2 }", () => {
    assert.strictEqual(assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));
  });
  it("returns { a: 1, b: 2 } for { a: 1, b: 3 }", () => {
    assert.strictEqual(assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); 
  });
});
