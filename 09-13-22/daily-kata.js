//Alternate capitalization
//
//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//The input will be a lowercase string with no spaces.
//Good luck!
//If you like this Kata, please try: 
//Indexed capitalization
//Even-odd disparity

function capitalize(s){
    let capOdd = ''
    let capEven = ''
    capEven = splitCaps(s, 0)
    capOdd = splitCaps(s, 1)
    return [capEven, capOdd]
  }
  function splitCaps(string, remainder){
    return string.split('').map((letter, index) => {
      if (index % 2 === remainder){
        return letter.toUpperCase()
      } else {
        return letter.toLowerCase()
      }
    }).join('')
  }