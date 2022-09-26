
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 0) {
      continue;
    }
    if (results[sentence[i]]) {
      results[sentence[i]].push(i)
    }
    else {
    results[sentence[i]] = [];
    results[sentence[i]].push(i);
  }
  }
  // logic to update results here
  return results;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
      }
      return true;
    } 
  }  

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  }
  if (!eqArrays(actual, expected)) {
    console.log("Assertion Failed: " + " " + actual + " !== " + expected);
  }
  };
  assertArraysEqual(letterPositions("hello").e, [1]);
  assertArraysEqual(letterPositions('lighthouse in the house').e, [9, 16, 22]);

  module.exports = letterPositions;