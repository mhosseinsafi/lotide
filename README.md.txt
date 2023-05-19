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