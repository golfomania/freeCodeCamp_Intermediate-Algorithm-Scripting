function sumAll(arr) {
  //copy arr to avoid mutation of original arr
  let arr2 = [...arr];

  //sort numbers from low to high
  arr2.sort((a, b) => a - b);
  //start with the lowest number
  let result = arr2[0];
  //then add the next number (i+1) until highest number is reached
  for (let i = arr2[0]; i < arr2[1]; i++) {
    result += i + 1;
  }
  return result;
}

sumAll([1, 4]);
