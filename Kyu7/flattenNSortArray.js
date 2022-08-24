Flatten and sort an array
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].




"use strict";

function flattenAndSort(array) {
//   if (array == undefined) {
//     return []
//   }
  
 return array.flat().sort((a,b) => a-b)
}
// param is an array
// returns an array with them concatenated
// example would be [1,4,3][][2,5,6]  [1,2,3,4,5,6]
// psuedo code woudl be I would sort the array out from least to highest with them combined through concatenation.




"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}