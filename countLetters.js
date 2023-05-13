
const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const results = {};
  for (const char of sentence) {
    if (char !== " ") {
      if (!results[char]) {
        results[char] = 1;
      } else {
        results[char]++;
      }
    } else {
      console.log("space skipped");
    }

  }
  return results;
};

module.exports = countLetters;

