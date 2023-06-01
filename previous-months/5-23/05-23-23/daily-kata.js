//Alphabetically ordered 
//
//Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
//Examples (input -> output)
//
//"kata"  -> false ('a' comes after 'k')
//"ant"  -> true (all characters are in alphabetical order)
//
//Good luck :)
//Check my other katas:
//Find Nearest square number 
//Case-sensitive! 
//Not prime numbers 
//Find your caterer 

function alphabetic(s) {
    let output = true
    const arr = s.split('')
    const sort = [...arr].sort()
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== sort[i]) {
        output = false
      }
    }  
    return output
  }