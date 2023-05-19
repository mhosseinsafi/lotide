const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns 'Lighthouse Labs' for 'Bootcamp'", () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'));
  });
  it("returns 1 for 1", () => {
    assert.strictEqual(assertEqual(1, 1)); 
  });
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);