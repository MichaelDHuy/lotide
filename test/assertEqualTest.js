
const assertEqual = require('../assertEqual');
const headArray = function(actual) {
  return actual[0];
}
assertEqual(headArray([5,6,7]), 5);
assertEqual(headArray(["Hello", "Lighthouse", "Labs"]), "Hello");