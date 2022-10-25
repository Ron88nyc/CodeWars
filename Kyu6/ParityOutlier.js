// const { useParams } = require("react-router-dom")

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)




function findOutlier(integers){
  //your code here
  let even = integers.filter(i => i % 2 === 0) 
  let odd = integers.filter(i => i % 2 !== 0)
  
  return integers.length == 1 ? even[0] : odd[0]
}

// I would first use a method to separate and filter out the even and odd array elements from the integer paramter.
// Next I would then use a conditional to check if there are even elements and if so it is the outlier to be returned out.