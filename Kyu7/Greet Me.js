// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"




var greet = function(name) {
    let upper = name.slice(0,1).toUpperCase()
    let lower = name.slice(1).toLowerCase()
    
    return `Hello ${upper}${lower}!`
    
  
  };
  

//   String.prototype.capitalize = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
// }

// var greet = function(name) {
// return "Hello " + name.capitalize() + "!";
// };



//   I would first split the first character of the string from the rest. Next I would apply a string method
//   which will conver it to Upper case and store it in the variable upper, the lower I would lowercase proof it with 
//   another string method. Next i'll join them and return the string.