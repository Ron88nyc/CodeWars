
// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []



function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
  }

// param is an ojbect
// return an array in descending order of score 60>
// example would be // {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// psuedo code I would first sort the objects and then create a conditional to filter out the scores of 60 and less.

// Clever Solution added
// const myLanguages = results => Object.entries(results)
//   .filter(([name, points]) => points >= 60)
//   .sort(([name1, points1], [name2, points2]) => points2 - points1)
//   .map(([name, points]) => name);