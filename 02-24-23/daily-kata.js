//Compare Strings by Sum of Chars
//
//Compare two strings by comparing the sum of their values (ASCII character code).
//
//For comparing treat all letters as UpperCase
//null/NULL/Nil/None should be treated as empty strings
//If the string contains other characters than letters, treat the whole string as it would be empty
//
//Your method should return true, if the strings are equal and false if they are not equal.
//Examples:
//"AD", "BC"  -> equal
//"AD", "DD"  -> not equal
//"gf", "FG"  -> equal
//"zz1", ""   -> equal (both are considered empty)
//"ZzZz", "ffPFF" -> equal
//"kl", "lz"  -> not equal
//null, ""    -> equal
//

function compare(s1, s2) {
    s1Sum = sumStrVals(s1)
    s2Sum = sumStrVals(s2)

    if (s1Sum === s2Sum) {
      return true
    } else {
      return false
    }
  }
  function sumStrVals(string){
    if (typeof string !== 'string') return 0
    let arr = isAllCharsLetter(string.split(''))
    let sum = arr.reduce((prev, letter) => {
        return prev + letter.toUpperCase().charCodeAt(0)
    }, 0)
    return sum
  }
  
  function isAllCharsLetter(arr) {
    if (arr.every(letter => (isStrLetters(letter)))) {
        return arr
    } else {
        return []
    }
  }
  function isStrLetters(str) {
    if (typeof str !== 'string') return false
    return (str.toLowerCase() !== str.toUpperCase())
  }