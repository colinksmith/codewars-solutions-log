//Merge two arrays
//
//Write a function that combines two arrays by alternatingly taking elements from each array in turn.
//Examples:
//[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
//
//[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
//
//Points:
//
//The arrays may be of different lengths, with at least one character/digit.
//One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
//
//Inspired by  https://adriann.github.io/programming_problems.html

function mergeArrays(a, b) {
    let output = []
    const times = a.length + b.length
    for (let i = 0; i < times; i++){
      if (i % 2 === 0 && a.length > 0) {
        output.push(a.shift())
      } else if (i % 2 === 1 && b.length > 0){
        output.push(b.shift())
      } else if (a.length > 0){
        output.push(a.shift())
      } else {
        output.push(b.shift())
      }
    }
    return output
  }