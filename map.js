const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

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

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  }
  if (!eqArrays(actual, expected)) {
    console.log("Assertion Failed: " + " " + actual + " !== " + expected);
  }
  };

  assertArrayEqual(map, [1, 2, 3]);
  assertArrayEqual(results1, [1, 2, 3]);
  assertArrayEqual(results1, ["g", "c", "t", "m", "t"]);