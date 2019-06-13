function dropElements(arr, func) {
  let flag = false;

  while (flag == false && arr.length > 0) {
    if (func(arr[0]) == true) {
      flag = true;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});
