// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase)
//  and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice



function duplicateCount(text){
    return text.toLowerCase()
               .split('')
               .filter((ele,i,arr) => {
      console.log(arr.indexOf(ele))
      console.log(arr.lastIndexOf(ele))
      return (arr.indexOf(ele) !== i && arr.lastIndexOf(ele) === i)
    }).length;
   }
   
   
   
   
   // param is a string
   // return a number 
   // e"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
   // psuedo code, i would first split them into an array. set up a filter and 
   // find the indexOf and last index of each char Case or multiple char and filter them out to a array 
//    and use that length as a count

// To find duplicated elements in the array, two conditions should return ‘true’. 
// First, the index of the element in 
// the array and its index found by using indexOf()
// shouldn’t match, if the indices match, it 
// means there is only one element in the array.
// Second, to make sure that the duplicate element 
// exists within the array, the index of the element and its index found by using lastIndexOf() should match. For example, let’s take a 
// look at the second ‘a’. Second ‘a’ has the index of 1 within the array and when its index is found using lastIndexOf(), the index is 1, 
// thus indices match, which proves that duplicate ‘a’ exists in the array. When you look at ‘c’, ‘d’, ‘e’ which doesn’t have duplicate,
// the index of each element should match the index found by using both indexOf() and lastIndexOf(), because index found by using both
// method should return the same index no matter what because only one element exists in the array.

// This function will return ‘true’ for the elements that are duplicate and finding the length of this array will be the solution to the problem.
https://medium.com/@jonghyeoklee90/counting-duplicates-3dccb004ff3c