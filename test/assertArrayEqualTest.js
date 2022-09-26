const assertArraysEqual = require('../assertArraysEqual')
const letterPositions = require('../letterPositions')

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, "strings", 3], [1, 2, 3])
assertArraysEqual(letterPositions("hello").e, [1]);