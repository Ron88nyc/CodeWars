// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
//     assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
//     assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")
//     assert.strictEqual(DNAStrand("AAGG"),"TTCC", "String AAGG is")
//     assert.strictEqual(DNAStrand("CGCG"),"GCGC", "String CGCG is")
//     assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
//     assert.strictEqual(DNAStrand("GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA"),"CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT")
//   })
// })










function DNAStrand(dna){
    var dnaPairs = {'A':'T', 'T':'A', 'G':'C', 'C':'G'};
    return dna.replace(/./g, sym => dnaPairs[sym]);
  }
  
  console.log(  DNAStrand("ATTGC")  ); // TAACG
  