
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.





My solution
const simple = simpleMultiplication = number => ((number % 2 == 0) ? number * 8 : number * 9)


most voted
function simpleMultiplication(n){
  return n % 2 == 0 ? n * 8 : n * 9
}
