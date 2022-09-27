const assertArrayEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  }
  if (actual !== expected) {
    console.log("Assertion Failed: " + " " + actual + " !== " + expected);
  }
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

  const flatten = function (arr) {
    let finalOutput = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
          finalOutput.push(arr[i][j]);
        }
      } else {
        finalOutput.push(arr[i]);
      }
    }
    return finalOutput;
  };
  
  console.log(flatten([1, 2, [3, 4], 5, [6]]));

  module.exports = flatten;