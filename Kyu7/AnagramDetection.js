// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"





// // write the function isAnagram
// param is a String
// return then in String
// example would be "twoo",'Woot'),true;
// psuedo Code , i would first lowercase all of the strings and split them into an Array, next i'll sort them and then join them back and see if it's equal to the other sort.
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };


  // function isAnagram (test, original) {
  //   return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
  // }