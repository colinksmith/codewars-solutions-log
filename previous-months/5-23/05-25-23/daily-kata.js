//All Star Code Challenge #16
//
//This Kata is intended as a small challenge for my students
//All Star Code Challenge #16
//Create a function called noRepeat() that takes a string argument and returns a single letter string of the first not repeated character in the entire string.
//noRepeat("aabbccdde") // => "e"
//noRepeat("wxyz") // => "w"
//noRepeat("testing") // => "e"
//
//Note:
//ONLY letters from the english alphabet will be used as input
//There will ALWAYS be at least one non-repeating letter in the input string

function noRepeat(str) {  
    let output = ''
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
      if (arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])) {
        output = arr[i]
        break
      }
    }
    return output
  }