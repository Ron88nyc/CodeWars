

Convert number to reversed array of digits



Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]






function digitize(n) {
  //code here
  return String(n).split('').reverse().map(Number)
 
}



function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

  function digitize(n){
    return (n + '').split('').map(Number).reverse();
  }

  function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }