const assert = require('chai').assert;
const without = require('../without');
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


const data = without([1,23,3, "hello"], ["hello"]);

//should pass
assertEqual(eqArrays(data, [1,23,3]), true);

//should fail
assertEqual(eqArrays(data, [1,23]), false);

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]