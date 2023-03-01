//Split In Parts
//
//The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
//Example:
//Split the below string into other strings of size #3
//
//'supercalifragilisticexpialidocious'
//
//Will return a new string
//'sup erc ali fra gil ist ice xpi ali doc iou s'
//
//Assumptions:
//String length is always greater than 0
//String has no spaces
//Size is always positive
//

var splitInParts = function(s, partLength){
  let output = ''
  for (let i = 0; i <= s.length - 1; i += partLength) {
    let section = ''
    if (i > 0) {
      section += ' '
    }
    section += s.slice(i, i + partLength)
    output += `${section}`
  }
  return output
}

// p: string, number (length)
// r: string separated by spaces of num length
// e: "supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s"
// p:
// let output = ''
// for s.length / partLength
//   section = s.slice(i, i + partLength)
//   output += section
// return output