function destroyer(arr) {
  //copy first argument in new array = not manipulate the original
  var result = [...arguments[0]];
  //itterate through arguments "array" starting with index 1 = all other given arguments
  for (let i = 1; i < arguments.length; i++) {
    //keep all elements unequal to the arguments[i]
    result = result.filter(el => el !== arguments[i]);
  }
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
