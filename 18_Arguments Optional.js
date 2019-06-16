//separate function to check if it is a number
function addTogether() {
  let checkNumber = function(num) {
    if (typeof num == "number") {
      return true;
    } else {
      return undefined;
    }
  };

  //if there are more than one arguments given
  if (arguments.length > 1) {
    //check arguments if they are numbers
    if (
      checkNumber(arguments[0]) == true &&
      checkNumber(arguments[1]) == true
    ) {
      //if yes sum them up
      return arguments[0] + arguments[1];
    } else {
      //if no end with undefined
      return undefined;
    }

    //if there is only one argument given
  } else {
    //save given number
    let firstNum = arguments[0];
    //check if it is a number
    if (checkNumber(firstNum) == undefined) {
      //if not end with undefined
      return undefined;
    }
    //separate function to return
    let func = function(argOne) {
      //check if the argument given to that function is a number
      if (checkNumber(argOne) == true) {
        //if yes sum both up
        return argOne + firstNum;
      } else {
        //if not end with undefined
        return undefined;
      }
    };
    //give back the function if not ended in first argument check
    return func;
  }
}

addTogether(2, 3);
