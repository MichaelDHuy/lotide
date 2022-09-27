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

const without = function(item, itemRemoved) {
  let elementRemoved = [];
  elementRemoved = elementRemoved.concat(item);
  for (let i = 0; i < item.length; i++) {
    for (let j = 0; j < itemRemoved.length; j++) {
      if (elementRemoved[i] === itemRemoved[j]) {
       elementRemoved.splice(i, 1); 
      }
    }
  }
  return elementRemoved;
}

assertArrayEqual(without([1, 2, 3, 1, 2, 3], [1]), [2, 3, 2, 3]);
assertArrayEqual(without([1, 2, 3, 1, 2, 3], [1, 2]), [3, 3]);

module.exports = without;