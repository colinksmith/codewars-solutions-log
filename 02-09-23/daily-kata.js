//All Star Code Challenge #3
//
//This Kata is intended as a small challenge for my students
//Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
//removeVowels("drake") // => "drk"
//removeVowels("aeiou") // => ""
//

var removeVowels = function(str){
    const key = 'aeiou'
    return str.split('').filter(letter => !key.includes(letter)).join('')
  }

//Find the odd int
//
//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.
//Examples
//[7] should return 7, because it occurs 1 time (which is odd).[0] should return 0, because it occurs 1 time (which is odd).[1,1,2] should return 2, because it occurs 1 time (which is odd).[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    const holder = A.reduce((prev, curr) => {
      if (!prev[String(curr)]){
        prev[String(curr)] = 1
      } else {
        prev[String(curr)]++
      }
      return prev
       
    }, {})
    for (num in holder) {
      if (holder[num] % 2 === 1){
        return Number(num)
      }
    }
  }