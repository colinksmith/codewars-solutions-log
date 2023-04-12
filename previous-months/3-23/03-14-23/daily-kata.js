//Vowel one
//
//vowelOne
//Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
//All non-vowels including non alpha characters (spaces,commas etc.) should be included.
//Examples:
//vowelOne( "abceios" ) // "1001110"
//
//vowelOne( "aeiou, abc" ) // "1111100100"
//

function vowelOne(s){
    const key = 'aeiou'
    return s.split('')
      .map(letter => {
        if (key.includes(letter.toLowerCase())) {
          return '1'
        } else {
          return '0'
        }
      })
      .join('')
  }