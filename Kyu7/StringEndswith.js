// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    // TODO: complete
    return str.slice(str.length-3) === ending.slice(ending.length-3) ? true : false
  }
  
  // param is a string
  // returns a boolean
  // example is 'abc','bc' true
  // psuedocode I would first slice the first strings last 3 char and the second strings last 3 character.
  // Next i would just a compare case to see if they match and if so its true and false if not.


//   function solution(str, ending){
//     return str.substr(-ending.length) == ending;
//   }

// function solution(str, ending){
//     return str.endsWith(ending);
//   }
