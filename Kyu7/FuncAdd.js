Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6




var add = a=> n=>n+a



// other solution

function add(n) {
    return function (m) {
      return n+m;
    }
  }

// param is a Number
// returns a number with + n
// example would be add(1)(3), 4
// pseudoCode, I would first ust a math method to apply the addition to any input param.