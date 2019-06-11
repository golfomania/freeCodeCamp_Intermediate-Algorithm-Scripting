function uniteUnique(arr) {
  let result = [];
  //iterate through given arguments
  for (let i = 0; i < arguments.length; i++) {
    //iterate through each array
    for (let x = 0; x < arguments[i].length; x++) {
      //if new number -> push to result array
      if (result.includes(arguments[i][x]) == false) {
        result.push(arguments[i][x]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
