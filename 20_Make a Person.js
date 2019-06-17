var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let arrPers = firstAndLast.split(" ");
  this.getFullName = function() {
    return arrPers[0] + " " + arrPers[1];
  };
  this.getFirstName = function() {
    return arrPers[0];
  };
  this.getLastName = function() {
    return arrPers[1];
  };
  this.setFirstName = function(first) {
    arrPers[0] = first;
  };
  this.setLastName = function(last) {
    arrPers[1] = last;
  };
  this.setFullName = function(firstAndLast) {
    let arr = firstAndLast.split(" ");
    arrPers[0] = arr[0];
    arrPers[1] = arr[1];
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();
