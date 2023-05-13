
const assert = require('chai').assert;
const flatten   = require('../flatten');
const assertEqual   = require('../assertEqual');
const eqArrays   = require('../eqArrays');



assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]),true); // => [1, 2, 3, 4, 5, 6]