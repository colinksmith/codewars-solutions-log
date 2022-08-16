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

//Sum of the first nth term of Series
//
//Task:
//Your task is to write a function which returns the sum of following series upto nth term(parameter).
//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
//
//Rules:
//
//You need to round the answer to 2 decimal places and return it as String.
//
//If the given value is 0 then it should return 0.00
//
//You will only be given Natural Numbers as arguments.
//
//
//Examples:(Input --> Output)
//1 --> 1 --> "1.00"
//2 --> 1 + 1/4 --> "1.25"
//5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
//

function SeriesSum(n){
    let sum = 0
    for (let i = 0; i < n; i++){
      sum += 1 / (1 + i * 3)
    }
    return String(sum.toFixed('2'))
  }