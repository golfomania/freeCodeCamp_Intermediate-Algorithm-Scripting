function spinalCase(str) {
  return str
    .replace(/[A-Z]/g, " $&")
    .replace(/[\_*\-*]/gi, " ")
    .split(" ")
    .filter(el => el !== "")
    .join("-")
    .toLowerCase();
}

spinalCase("This_is-SpinalTap");

/*
1. separate strings written without whitespace (e.g. thisIsAnString)
2. replace all _ and - with an whitespace
3. split to array at each whitespace
4. filter out all empty elements (due to more than one whitespace in some situations)
5. join with "-"
6. all to lower case
*/
