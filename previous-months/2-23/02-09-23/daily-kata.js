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

//Rot13
//
//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//Create a function that takes a string and returns the string ciphered with Rot13. 
//If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    const key = 'abcdefghijklmnopqrstuvwxyz'
    const capKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    return message
        .split('').map( letter => {
          if (key.includes(letter)){
            letter = key[(key.indexOf(letter) + 13) % 26]
          } else if (capKey.includes(letter)){
            letter = capKey[(capKey.indexOf(letter) + 13) % 26]
          } 
          return letter
        })
        .join('')
  }