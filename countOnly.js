
const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const results = {}; //emmpty object,will store the count of items.

  for (const item of allItems) { //It iterates over each element in the allItems array 
    if (itemsToCount[item]) {    //checks for each item if it exists as a key in the itemsToCount
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    console.log(item);
  }

  return results;
}

module.exports = countOnly;

