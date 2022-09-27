const countLetters = function(letters) {
  letters = letters.split(" ").join("");
  const result = {};
  for (const letter of letters) {
if (result[letter]) {
    result[letter] += 1;
  } 
  else {
    result[letter] = 1;
  }
}
  return result;
};

console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;