//Scrolling Text
//
//Let's create some scrolling text!
//Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
//Example
//scrollingText("codewars") should return:
//[ "CODEWARS",
//  "ODEWARSC",
//  "DEWARSCO",
//  "EWARSCOD",
//  "WARSCODE",
//  "ARSCODEW"
//  "RSCODEWA",
//  "SCODEWAR" ]
//
//Good luck!

function scrollingText(text){
    const output = []
    text = text.toUpperCase()
    for (let i = 0; i < text.length; i++) {
      const digit = text[0]
      output.push(text)
      text = text.slice(1) + digit
    }
    return output
  }