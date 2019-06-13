function fearNotLetter(str) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let result = abc
    .slice(
      abc.indexOf(str.charAt()),
      abc.indexOf(str.charAt()) + str.length + 1
    )
    .split("")
    .filter(el => str.indexOf(el) == -1);
  return result[0];
}

fearNotLetter("bcdf");
