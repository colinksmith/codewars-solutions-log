//Longest vowel chain
//
//The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring.
//Vowels are any of aeiou. 
//Good luck!
//If you like substring Katas, please try:
//Non-even substrings
//Vowel-consonant lexicon

function solve(s){
    let key = 'aeiou'
    let max = 0
    let temp = 0
    for (let i = 0; i < s.length; i++){
      if (key.includes(s[i])) {
        temp++
      } else {
        max = Math.max(max, temp)
        temp = 0
      }
    }
    return max
   }