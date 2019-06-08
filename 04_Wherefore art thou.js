function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  //generate an array of the properties of the source array
  var srcKeys = Object.keys(source);

  //filter the array of objects "collections"
  //filter = true if all scrKeys elements are a property of collection AND Key:value from collection is identical to key:value source
  arr = collection.filter(colEl =>
    srcKeys.every(
      srcEl => colEl.hasOwnProperty(srcEl) && colEl[srcEl] === source[srcEl]
    )
  );

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
