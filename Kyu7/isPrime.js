

// Check for prime with a function






function isPrime(num) {
 if (num <= 1) return false;
 if (num=== 2) return true;
 let num2 = Math.sqrt(num);//num2 is the square root of num
 for (let i= 2; i <= num2; i++) { //note that we are working now with the square root
  if (num2 % i === 0) {
  return false;
   }
 }
  return true;
 }
isPrime(521) //is True
isPrime(9801) //is False
isPrime(13037) //is True