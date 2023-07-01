//Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
//
//Description:
// Remove all exclamation marks from sentence except at the end.
//Examples
//remove("Hi!") == "Hi!"
//remove("Hi!!!") == "Hi!!!"
//remove("!Hi") == "Hi"
//remove("!Hi!") == "Hi!"
//remove("Hi! Hi!") == "Hi Hi!"
//remove("Hi") == "Hi"
//

function remove (string) {
    let output = []
    let arr = string.split('')
    let isEndOfSentence = true
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === '!' && isEndOfSentence === false) {
        continue
      } else if (arr[i] !== '!') {
        isEndOfSentence = false
      } 
      output.unshift(arr[i])
    }
    return output.join('')
  }
remove("Hi! Hi!", "Hi Hi!")