Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]



var flatten = function (array){
  
 return [].concat(...array)
}


// using an empty array bracket, i'll apply the javascript method of concat into the spread operator of the array.
// By accessing the element im able to concat it into the empty array