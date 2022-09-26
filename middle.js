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

module.exports = middle;