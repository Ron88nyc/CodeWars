

Find the count sum of the positives, sum of Negatives and push an the array




function countPositivesSumNegatives(input) {
    const arr = [];
    let positiveSumCount = 0;
    let negativeSum = 0;
    if(input && input.length) {                   <--- the conditions says if theres an input and the input has an element in it the for loop runs
      for(let i = 0; i < input.length; i++) {
        if(input[i] > 0) {
            positiveSumCount += 1;
        } else {
            negativeSum += input[i];
        }
      }
      arr.push(positiveSumCount);
      arr.push(negativeSum);
    }
    return arr;
}
