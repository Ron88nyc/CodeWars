
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.





function find_average(array) {
  if (array == 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < array.length; i++){
   total += array[i];
   
  }
   return total/array.length;
}


// other solution

// var find_average = (array) => {  
//   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }


