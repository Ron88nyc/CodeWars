
// Write a function that checks if a given string (case insensitive) is a palindrome.


// describe("Fixed tests", function() {
//     it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
//     it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
//     it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
//     it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
//     it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
//     it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
//     it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
//     it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
//   });
  


function isPalindrome(x) {
  // your code here
  let reversed = x.split('').reverse().join('')
  console.log(reversed)
  return x.toLowerCase() === reversed.toLowerCase() ? true:false
}
// param input is a string 
// returns a string too
// racecar true madam true

// aba true
// hello false
// no edge cases
// I would turn the param string into an array and reverse it backwards. Afterwards i'll compare its string values are the same as
// forward case
