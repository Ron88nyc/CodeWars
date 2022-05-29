8 kyu
Square(n) Sum
81521092% of 10,69044,382 of 117,794jhoffner1 Issue Reported


Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.










function squareSum(numbers){
  return numbers.map(num => num*num).reduce((nums,acc)=> nums += acc,0)
}

