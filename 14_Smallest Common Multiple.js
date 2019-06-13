function smallestCommons(arr) {
  let arrNew = [];
  let multiplier = 0;
  let flag = false;
  let test = 0;

  arr.sort((a, b) => a - b);

  for (let i = arr[0]; i <= arr[1]; i++) {
    arrNew.push(i);
  }

  while (flag == false) {
    multiplier++;
    test = arrNew[arrNew.length - 1] * multiplier;
    flag = arrNew.every(el => test % el == 0);
  }

  return arr[arr.length - 1] * multiplier;
}

smallestCommons([1, 5]);
