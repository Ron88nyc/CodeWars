Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string


function reverseLetter(str) {

//   caret ^ symbol means "not the following". 
//   In our case this means not any letters in
//   the range of a-z will not be replaced,while everything else will.
// The i flag makes our match case insensitive - 
//   we match all uppercase and lowercase characters.

  return str.replace(/[^a-z]/gi,'').split('').reverse().join('')
}

// parameter is a string
// return a string reversed without non alphabetic numbers
// example/edgecase are 'number123','number'
// pseudocode, first i would convert the string into an array so I can apply
// array specific methods, and to remove  non alpabetic characters through the array.
// then i'll probably join the array back into a string


reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');
