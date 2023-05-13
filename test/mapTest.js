

const assert = require('chai').assert;
const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["hassan", "ali", "taghi", "naghi", "jamshid"];



const results1 = map(words, word => word[0]);
assertArraysEqual(results1,words.map(x => x[0]));