// Given a number as an input, print out every integer from 1 to that number. 
// However, when the integer is divisible by 3, print out “Fizz”; when
//  it’s divisible by 5, print out “Buzz”; when it’s divisible 
//  by both 3 and 5, print out “Fizz Buzz”.


 function fizzBuzz (num) {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz')
        } else if(i % 3 === 0) {
            console.log('Fizz')
        } else if(i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
 }

//  i would use a conditional to check if each number that passes through would 
//  be divisible by 3. It'll print out fizz if so and buzz if divisible by 5. When it's
//  divisible by both i'll have it print out 'Fizz Buzz'