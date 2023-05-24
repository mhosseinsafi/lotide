# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mhosseinsafi/lotide`

**Require it:**

`const _ = require('@mhosseinsafi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: A commonly used function for arrays is to retrieve the first element from the array. This is often referred to as the "head" of the array.

* `function2(middle)`: While lodash does support head and tail functions for arrays, it does not have a middle function. Alas, middle is the forgotten child.

* `function3(tail)`: Instead of the "head", sometimes we need the "tail" of an array. The tail is not the last element of the array. The tail is meant to be every element except the head (first element) of the array.

* `function1(without)`: This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

* `function1(assertArraysEqual)`: While the assertEqual is great at comparing primitive types (like numbers and strings), we could use another function for asserting that two arrays are equal.

* `function1(eqArrays)`: This function compares two arrays for equality. It returns true if the arrays are equal and false otherwise.

* `function1(findKey)`: Now that we know about callbacks, let's make a more complex version of this in a similar way to what Lodash has.

* `function1(takeUntil)`: The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

* `function1(Map)`: map function will take in two arguments: An array to map , A callback function. The map function will return a new array based on the results of the callback function.

* `function1(assertEqual)`: it would be nice to be able to see a series of success / failure messages printed to the console, letting us know if our functions are behaving as expected.

* `function1(assertObjectsEqual)`: This function compares two objects, actual and expected, using another function called eqObjects to check if they are equal.

* `function1(eqObjects)`:This function implementation will require us to further practice problem solving through object key iteration again.

* `function1(findKeyByValue)`:  It will help us search for a key on an object where its value matches a given value.

* `function1(letterPositions)`: For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

* `function1(countLetters)`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `function1(countOnly)`: This function should take in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.

* `function1(flatten)`: This function takes an array as input and returns a new array with all the elements flattened. Here's how the code works.
