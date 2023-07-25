//Capitals first!
//
//Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end.
//The order of the uppercase and lowercase words should be the order in which they occur.
//If a word starts with a number or special character, skip the word and leave it out of the result. 
//Input String will not be empty.
//For an input String: "hey You, Sort me Already!" 
//the function should return: "You, Sort Already! hey me"

function capitalsFirst(str){
    const firsts = []
    const lasts = []
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0].toLowerCase() === arr[i][0].toUpperCase()) {
        continue
      }
      if (arr[i][0] === arr[i][0].toUpperCase()) {
        firsts.push(arr[i])
      } else {
        lasts.push(arr[i])
      }
    }
    return [...firsts, ...lasts].join(' ')
  }