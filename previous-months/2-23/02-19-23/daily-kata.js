//Responsible Drinking
//
//Welcome to the Codewars Bar!
//Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.
//Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
//Examples
//"1 beer"  -->  "1 glass of water"
//because you drank one standard drink
//
//"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
//because you drank ten standard drinks
//
//Note:
//To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

function hydrate(s) {
    let numberOfDrinks = s.split(' ')
      .filter(word => parseInt(word))
      .reduce((prev, curr) => {
        return prev + Number(curr)
      }, 0)
    let pleural = ''
    if (numberOfDrinks > 1) pleural = 'es'
    return `${numberOfDrinks} glass${pleural} of water`
  }
  
  // p: string with num
  // r: # glass(es) of water
  // e: "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
  // because you drank ten standard drinks
  // p:
  // search string for any numbers
  // sum numbers
  // return string of numbers of glasses of water


//Inspiring Strings
//When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.
//
// Example:
//
// 'red white blue' //returns string value of white
//
// 'red blue gold' //returns gold

function longestWord(stringOfWords){
  let longWordIndex = 0
  let length = 0
  let arr = stringOfWords.split(' ')
  //find word with longest length
  arr.forEach((word, index) => {
      if (word.length >= length) {
        length = word.length
        longWordIndex = index        
      }
    })
  return arr[longWordIndex]
}
longestWord('a b c d e fgh')
longestWord('red blue grey')