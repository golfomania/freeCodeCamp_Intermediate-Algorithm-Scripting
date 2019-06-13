function myReplace(str, before, after) {
  //split "after" in single characters array in order to manipulate them separately
  var word = after.split("");

  //check if first character of "before" is upper or lower case
  //change first character of "after" to the same case
  if (before.charAt() == before.charAt().toUpperCase()) {
    word[0] = word[0].toUpperCase();
    word = word.join("");
  } else {
    word[0] = word[0].toLowerCase();
    word = word.join("");
  }

  //split "str" to an array, exchange "before" with "word" (=manipulated after) and join back to a string
  str = str.split(" ");
  str.splice(str.indexOf(before), 1, word);
  return str.join(" ");
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
