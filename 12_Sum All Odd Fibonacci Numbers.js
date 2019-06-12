function sumFibs(num) {
  let arr = [1, 1];
  while (arr[arr.length - 1] <= num) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  arr.pop();
  let result = arr.filter(el => el % 2 !== 0).reduce((a, b) => a + b);
  return result;
}

sumFibs(75025);
