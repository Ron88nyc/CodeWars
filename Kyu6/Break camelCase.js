// complete the function
function solution(string) { 
  let char = string.split('')
  //split into array so you can add space before the capital, wont work ona string.
  //now Loop and Compare
  for(let i = 0; i < char.length; i++) {
    if (char[i] === char[i].toUpperCase()) {
      //put a space behind the capital if condition is met.
      char[i] = ' ' + char[i]
    }
  }
  
  return char.join('')
}





//   function solution(string) {
//     return string.split('').map(function(e) {
//       return e === e.toUpperCase() ? (" " + e) : e
//       }).join('')
//   }




//   // complete the function
// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));

// }