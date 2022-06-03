
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"



// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
//     assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
//     assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
//     })
//   })

 // parameter is a string
  // returns a string
  // examples edgecases no empty string and anything after # is removed.
  // psuedo code
  // i'll create an eempty string
  // loop through the url and cut out anything after the #.






function removeUrlAnchor(url){
    // TODO: complete
    let str = '';
    
    for (let i = 0; i < url.length; i++) {
      if (url[i] !== '#') {
        str += url[i]
      } else {
        return str;
      }
    }
    return str
  }
  
  

  function removeUrlAnchor(url){
    return url.split('#')[0];
  }