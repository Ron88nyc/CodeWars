8 kyu
Sum Mixed Array
34811693% of 4,44118,641 of 40,362PG11 Issue Reported
 JavaScript
Node v14.x
VIM
EMACS
Instructions
Output
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.




function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }




  function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }