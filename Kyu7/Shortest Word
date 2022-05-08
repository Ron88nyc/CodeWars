Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

function findShort(s){
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}


function findShort(s){
  let result =s.split(' ')
  let smallets = result[0].length;
  for(let i = 0; i < result.length; i++) {
    if (result[i].length<smallets){
      smallets = result[i].length
    }
  }
  return smallets
}
