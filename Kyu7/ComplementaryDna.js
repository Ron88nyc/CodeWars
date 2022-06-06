// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// You function receives one side of the DNA (string, except for Haskell); you need to return the 
// other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;


function DNAStrand(dna){
    var dnaPairs = {'A':'T', 'T':'A', 'G':'C', 'C':'G'};
    return dna.replace(/./g, sym => dnaPairs[sym]);
  }
  
  console.log(  DNAStrand("ATTGC")  ); // TAACG
  


//   function DNAStrand(dna){
//     //your code here
//     var result= "";
//         for(var i =0; i<dna.length; i++) 
//         {
//           if (dna[i]==="A") 
//          {
//           result +="T";
//          }
//           else if (dna[i]==="T") 
//          {
//           result += "A";
//           }
//           else if (dna[i]==="C")
//           {
//           result +="G";
//           }
//           else if (dna[i]==="G")
//           {
//           result += "C";
//           }
//           else {
//           result +=dna[i];
//           }
//        }
//        return result;
//     }