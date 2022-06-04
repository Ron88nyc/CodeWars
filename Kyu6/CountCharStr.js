
// Count characters in your string


// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.










//reduce solution

function count (string) {  
 
    return string.split('').reduce((obj,s) => {
      obj[s] = (obj[s] || 0) + 1;
      console.log(obj[s])
      return obj;
    }, {})
  }

  //for each solution
  function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }