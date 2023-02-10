//Unique string characters
//
//In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings. 
//For example:
//solve("xyab","xzca") = "ybzc" 
//--The first string has 'yb' which is not in the second string. 
//--The second string has 'zc' which is not in the first string. 
//
//Notice also that you return the characters from the first string concatenated with those from the second string.
//More examples in the tests cases. 
//Good luck!
//Please also try Simple remove duplicates

// p:  two strings
// r: one string, uniques from a + uniques from b
// e: solve("xyab","xzca") = "ybzc" 
// p:
// aUniques = filter a for not included in b
// bUniques = filter b for not inclkuded in a
// return aUniques + bUniques

function solve(a,b){
    // aUniques = filter a for not included in b
      let aUniques = a.split('')
        .filter(letter => {
          return !b.includes(letter)
        })
        .join('')
      let bUniques = b.split('')
        .filter(letter => {
          return !a.includes(letter)
        })
        .join('')
    // bUniques = filter b for not inclkuded in a
    // return aUniques + bUniques
      return aUniques + bUniques
    };
    
    
    