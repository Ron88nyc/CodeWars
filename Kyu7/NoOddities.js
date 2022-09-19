Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.





No oddities here


function noOdds( values ){
    function isEven(number){
    return number%2 == 0;
    }
    
    return values.filter(isEven);
  }


  var noOdds = values => values.filter(x => x % 2 === 0);