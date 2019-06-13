function steamrollArray(arr) {
  return arr.flat(10);
}

steamrollArray([1, [2], [3, [[4]]]]);
