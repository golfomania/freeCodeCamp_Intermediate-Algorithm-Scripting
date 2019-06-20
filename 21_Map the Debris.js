function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  //function to calculate the orbital period of a given number
  let calcOrbitalPeriod = function(num) {
    return 2 * Math.PI * Math.sqrt(Math.pow(earthRadius + num, 3) / GM);
  };

  //iterate through array of objects
  for (let i = 0; i < arr.length; i++) {
    //add new key-value pair with rounded result from calc function
    arr[i]["orbitalPeriod"] = Math.round(calcOrbitalPeriod(arr[i].avgAlt));
    //delete old average Altitude key-value pair
    delete arr[i].avgAlt;
  }
  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
