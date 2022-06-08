




//  my solution\

//  param is an Array
//  returns the sum of 2 lowest num in the Array
//  e [1,2,3,4]  1+2 = 3 
//  p I would arrange the array from smallest to highest and add the first 2 lowest together.Array




function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b) => a - b)[0] + numbers.sort((a,b) => a - b)[1]
  }

  function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };





  function sumTwoSmallestNumbers(numbers) {  
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;
    
    var n;
    for (i = 0; i < numbers.length; i++) {
      n = numbers[i];
      if(n < min) {
        secondMin = min;
        min = n;
      } else if( n < secondMin ) {
        secondMin = n;
      }
    }
    
    return min + secondMin;
  }