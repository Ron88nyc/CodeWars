// Sum of Digits / Digital Root


// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue 
// reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2




// param is a num
// returns a single digit and sum of its partnerts
// example 16 --> 1 + 6 = 7
// psuedo code
// I would create a conditional so the recursive function wont go on an infinite loop
// next i would convert the number to a string so I can apply the split method to convert it an array, 
//   then i'll apply reduce method on it to add up all the numbers. I have this going until the condition is met




function digital_root(n) {
  // ...
  if (n < 10) 
    return n
  
  
  console.log( digital_root(n.toString().split('').reduce((prev,current) => 
    prev + +current,0)))
}



other solution
// return digital_root(
//     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));