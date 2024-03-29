

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, 
// i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.



// My Solution using the string.replace() method. example using string.replace('T','U') will only apply to the first instance.
// For the global and continuous use it would have to be string.replace(/T/g,'U').

my solution
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g,'U')
}


// other solutions
// function DNAtoRNA(dna) {
//   return dna.split("T").join("U");
// }

// const DNAtoRNA = dna => dna.replace(/T/g, 'U');


