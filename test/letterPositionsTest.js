
const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');
const assertArraysEqual   = require('../assertArraysEqual');



console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);