 Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
 If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
 

My Solution

function (numbers) {
  "use strict";
  let total = 0;
  for(let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

 
 

Others solution

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}


// Sum Numbers
sum = function (numbers) {
  "use strict";
  return numbers.reduce(function(t, n){
    return t + n;
  }, 0);
};




array.reduce
The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

 Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
