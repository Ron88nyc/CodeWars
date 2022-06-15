
// Take 2 strings s1 and s2
//  including only letters
//   from ato z. Return a new sorted string, 
//   the longest possible, containing distinct letters 
//   - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



// I would first combine the arrays and then split them into characters.
// After check for duplicates then sort them out.
// then combine them back into a new array with the filtered our duplicates


function longest(s1, s2) {
    // your code
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function(element, index, array){
      return element !== array[index - 1];            
    });
    return s4.join("");
  }




//   const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')