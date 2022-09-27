const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  }
  if (actual !== expected) {
    console.log("Assertion Failed: " + " " + actual + " !== " + expected);
  }
  };
  const findKey = function(objects, callback) {
  for (let object in objects) {
    if(callback(objects[object])) {
    return object;
    } 
  }
  }
  const resultX = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3) // => "noma"
  console.log(resultX);

  assertEqual(resultX, "Akaleri");

  module.exports = findKey;