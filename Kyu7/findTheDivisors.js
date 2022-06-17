// Create a function named divisors/Divisors that takes an integer n > 1 and returns an 
// array with all of the integer's divisors(except for 1 and the number itself), 
// from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"


// my solution
function divisors(integer) {
    let array = [];
    
    for (let i = 2; i < integer; i++) {
      if (integer % i === 0) {
        array.push(i)
      } 
    }
    return array.length ? array : integer + ' is prime'
  };
  
  //I would first set up an array , then loop from the number 2 since prime is greater than 1. I would then check for prime and push into
  //the empty array. Next I would condition to see if array is empty or if an integer is prime.

//   most voted
//   function divisors(integer) {
//     var res = []
//     for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//     return res.length ? res : integer + ' is prime'
//   };