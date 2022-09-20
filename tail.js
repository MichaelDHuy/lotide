const actual = ["Hello", "Lighthouse", "Labs"];
const result = function(actual) {
let resultFace = actual.slice(1);
return resultFace;
} 
const assertEqual = function(actual, expected) {   
  if (actual === expected) {
    console.log("Assertion Passed: " + result + " === " + expected);
  }
  if (actual !== expected) {
    console.log("Assertion Failed: " + " " + result + " !== " + expected);
  }
};
assertEqual(result(actual), ["Lighthouse", "Labs"]);
assertEqual(actual.length, 3);