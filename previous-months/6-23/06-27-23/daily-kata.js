//Exclamation marks series #8: Move all exclamation marks to the end of the sentence
//
//Description:
// Move all exclamation marks to the end of the sentence
//Examples
//remove("Hi!") === "Hi!"
//remove("Hi! Hi!") === "Hi Hi!!"
//remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
//remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
//remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
//

function remove (string) {
    string = string.split('!')
    let count = string.length
    string = string.join('')
    string = string + ('!'.repeat(count)).slice(1)
    return string
  }