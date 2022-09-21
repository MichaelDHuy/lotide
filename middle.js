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

  const middle = function(array) {
    let newArray = [];
    let startIndex = Math.floor(array.length/2);
    if (array.length < 3) { 
      newArray = [];
    }
    else if (array.length %2 === 1) {
    newArray.push(array[startIndex]);  
    }
    else {
    newArray.push(array[startIndex - 1]);
    newArray.push(array[startIndex]);
    }
    return newArray;
  }

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2]), []);

assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);