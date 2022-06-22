// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"



// function shortcut (string) {
//   return string.replace(/[aeiou]/g,'')
// }

const shortcut = string => (string.replace(/[aeiou]/gi,''))

// I would replace the the string with a method that removes all the aeiou global index and return an empty string.