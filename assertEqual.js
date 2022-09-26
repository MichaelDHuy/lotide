const headArray = function(actual) {
  return actual[0];
}
const assertEqual = function(actual, expected) {   
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  }
  if (actual !== expected) {
    console.log("Assertion Failed: " + " " + actual + " !== " + expected);
  }
};
assertEqual(headArray([5,6,7]), 5);
assertEqual(headArray(["Hello", "Lighthouse", "Labs"]), "Hello");
