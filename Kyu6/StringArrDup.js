// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.



function dup(s) {

  return s.map( e => e.split('').filter((e,i,arr) => e != arr[i-1]).join(''))}
  
      
// Parameter is an array
// Returns back all non-consecutive duplicate letters from each string in the array
// Example: (dup(['kelly']), ['kele'])
// PseudoCode, First we'll split the string to in each words. 
// iterate over the array,  we'll check for consec dupes with a conditonal and remove those.
// we can then push them into a new array or pop it or join.

// function dup(s) {
//   return s.map(x => x.replace(/(.)\1+/g,'$1'))
// };