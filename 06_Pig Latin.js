function translatePigLatin(str) {
  //regex for starting with an consonant
  let regex = /^[^aeiou]/;

  if (regex.test(str)) {
    //if true, then find all* starting consonants + the rest in seperate () regex, and replace with new string: change order and add "ay"
    return str.replace(/ (^[^aeiou]*) ((?<=^[^aeiou]*)\w*) /, "$2$1ay");
  } else {
    //if false, just add "way"
    return str.concat("way");
  }
}

translatePigLatin("glove");
