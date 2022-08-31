//Anagram Detection
//
//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//Note: anagrams are case insensitive
//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//Examples
//
//"foefet" is an anagram of "toffee"
//
//"Buckethead" is an anagram of "DeathCubeK"
//
//

var isAnagram = function(test, original) {
    let testCountObj = objectifyLetterCount(test)
    let originalCountObj = objectifyLetterCount(original)
    return compareObjects(testCountObj, originalCountObj)
  };
  function objectifyLetterCount(string){
    let output = string
                      .toLowerCase()
                      .split('')
                      .reduce((prev, curr) => {
      if (!prev[curr]){
        prev[curr] = 1
      } else {
        prev[curr] += 1
      }
      return prev
    }, {})
    return output
  }
  function compareObjects(obj1, obj2){
    for(const prop in obj1){
        if (obj1[prop] !== obj2[prop]){
            return false
        }
    }
    for(const prop in obj2){
        if (obj2[prop] !== obj1[prop]){
            return false
        }
    }
    return true
  }
  const obj1 = {s:1,t:2,r:3}
  const obj2 = {s:1,t:2,r:3}
  const obj3 = {s:2,t:2,r:3}
  const anagram1 = 'ound'
  const anagram2 = 'round'
console.log(isAnagram(anagram1, anagram2))