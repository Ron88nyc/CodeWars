

Remove duplicate words

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'












const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')


function removeDuplicateWords (s) {
    return s.split(' ').filter((n, i, s) => {
      return s.indexOf(n) === i;
    }).join(' ');
  }

  function removeDuplicateWords (s) {
    // your perfect code...
    return s.split(' ').filter((ele,i,s) => {
      return s.indexOf(ele) === i
    }).join(' ')
  }
  
  // returns a string with no dupes in it
  // i would first split them into an array to apply the filter method. Next I would use the indexOf to see if the element
  // is a duplicate of the next iteration. If it is it'll be filtered out, After i'll join it to change it back to a string.