

Array plus array
24212892% of 5,11420,514 of 44,039Dmitry Kudla
 JavaScript
Node v14.x
VIM
EMACS
Instructions
Output
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

describe("Basic tests", () => { 
    it("Testing for fixed tests", () => {
      assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
      assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
      assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
      assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
    })
  })















function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((ele,i)=> ele += i,0) + arr2.reduce((ele,i)=> ele += i,0); //something went wrong
}