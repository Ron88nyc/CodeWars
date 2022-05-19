Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"



function oddOrEven(array) {
    //entercode here
   let value = 0;
   
   if(array === [0]) {
     return 'even'
   }
   
   for (let i = 0; i <array.length; i++) {
     value += array[i];
   }
   return value % 2 === 0 ? 'even':'odd'
 }
 

 function oddOrEven(array) {
    return array.reduce((curr,acc) =>curr += acc,0) % 2 === 0 ? "even":"odd"
}




// parameter
// return
// example 
// psuedo code

// set a value to 0 and have the array looped its length. 
// have them added together, next
// use a conditional to see if the value total is odd or even
 
 
 
 // parameter
 // return
 // example 
 // psuedo code
 
 // set a value to 0 and have the array looped its length. 
 // have them added together, next
 // use a conditional to see if the value total is odd or even