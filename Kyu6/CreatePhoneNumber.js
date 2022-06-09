// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"



function createPhoneNumber(numbers){
    numbers.splice(0,0,'(')
    numbers.splice(4,0,')',' ')
    numbers.splice(9,0,'-')
    
    return numbers.join('')
  }
  
  // param is an array
  // r should return a string with thos numbers in form of number
  // e createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  // p i would first convert the array into a string format and then possibly 
  // slice the first 3, put parenthesis around them and a space after. next i'll insert a '-' inbetween 7 and 8th index










// Other solutions//


function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }










function createPhoneNumber(numbers){
    numbers.unshift("(");
    numbers.splice(4, 0, ")", " ");
    numbers.splice(9, 0, "-");
    return numbers.join("");
  }


  function createPhoneNumber(numbers){
    const areaCode = numbers.slice(0, 3).join("");
    const firstThree = numbers.slice(3, -4).join("");
    const lastFour = numbers.slice(6).join("");
    return `(${areaCode}) ${firstThree}-${lastFour}`;
  }
  
