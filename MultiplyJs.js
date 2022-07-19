

Create a function that would multiple two numbers

multiply(2,3), 6
multiply(3,3), 9






describe("Multiply", () => {
    it("fixed tests", () => {
      assert.strictEqual(multiply(1,1), 1);
      assert.strictEqual(multiply(2,1), 2);
      assert.strictEqual(multiply(2,2), 4);
      assert.strictEqual(multiply(3,5), 15);   
    });
  });


I will first make sure i can return the answer to the function. Then add the multiply symbole for the parameters a and b

function multiply(a, b){
  return a * b
}

new Format

const multiply = (a,b) => a * b
