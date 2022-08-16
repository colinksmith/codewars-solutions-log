//Odd or Even?
//
//Task:
//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).
//Examples:
//Input: [0]
//Output: "even"
//
//Input: [0, 1, 4]
//Output: "odd"
//
//Input: [0, -1, -5]
//Output: "even"
//
//Have fun!

function oddOrEven(array) {
    let sum = array.reduce((prev, curr) => {
      return prev + curr
    },0)
   return sum % 2 === 0 ? 'even' : 'odd'
 }

//Reverse words
//
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"
//

function reverseWords(str) {
    return str.split(' ')
              .map(x => x.split('').reverse().join(''))
              .join(' ')
  }