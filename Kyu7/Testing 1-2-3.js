


Testing 1-2-3






Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]














var number=function(array){
//   let arr = ['1: ','2: ','3: ']
  //your awesome code here
  let result = [];
  if (array.length <= 0) {
    return []
  }
  
  for (let i = 0, j = 1; i < array.length; i++) {
    result.push(`${j}: ${array[i]}`)
    j++
   }
  return result
  }



  var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }