# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @michael_huy/lotide`

**Require it:**

`const _ = require('@michael_huy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: assert arrays equal
* `assertEqual(actual, expected)`: assert equal
* `assertObjectsEqual(actual, expected)`: assert objects equal
* `countLetters(letters)`: count letters
* `countOnly(allItems, itemsToCount)`: count only specific letter
* `eqArrays(array1, array2)`: equal arrays
* `eqObjects(object1, object2)`: equal objects
* `findKey(objects, callback)`: find specific item
* `findKeyByValue(selections, show)`: find specific item by its value
* `flatten(arr)`: flatten array
* `head(actual)`: take the head of array
* `letterPositions(sentence)`: find the position of letters
* `map(array, callback)`: mapping array
* `middle(array)`: take the middle part of array
* `tail(array)`: take the tail of array
* `takeUntil(array, callback)`: take items from array
* `without(item, itemRemoved)`: remove item from array
Instruction
