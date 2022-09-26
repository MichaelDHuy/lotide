const assertEqual = require('../assertEqual');
const tail = require('../tail');
const actual = ["Hello", "Lighthouse", "Labs"];

assertEqual(tail(actual), ["Lighthouse", "Labs"]);
assertEqual(actual.length, 3);