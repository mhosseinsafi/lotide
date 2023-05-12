
const assert = require('chai').assert;
const assertObjectsEqual   = require('../assertObjectsEqual');

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1 , b: 2};

assertObjectsEqual(obj1, obj2);