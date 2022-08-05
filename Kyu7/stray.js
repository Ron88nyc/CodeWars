
function stray(numbers) {
  var a = numbers.sort();

  if (a[0] != a[1]) {
    return a[0]
  }
  return a[a.length - 1]
}


function stray(numbers) {
  for (var i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i]
    }
  }
}
