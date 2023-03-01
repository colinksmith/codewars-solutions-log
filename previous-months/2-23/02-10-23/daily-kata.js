//Unique string characters
//
//In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings. 
//For example:
//solve("xyab","xzca") = "ybzc" 
//--The first string has 'yb' which is not in the second string. 
//--The second string has 'zc' which is not in the first string. 
//
//Notice also that you return the characters from the first string concatenated with those from the second string.
//More examples in the tests cases. 
//Good luck!
//Please also try Simple remove duplicates

// p:  two strings
// r: one string, uniques from a + uniques from b
// e: solve("xyab","xzca") = "ybzc" 
// p:
// aUniques = filter a for not included in b
// bUniques = filter b for not inclkuded in a
// return aUniques + bUniques

function solve(a,b){
    // aUniques = filter a for not included in b
      let aUniques = a.split('')
        .filter(letter => {
          return !b.includes(letter)
        })
        .join('')
      let bUniques = b.split('')
        .filter(letter => {
          return !a.includes(letter)
        })
        .join('')
    // bUniques = filter b for not inclkuded in a
    // return aUniques + bUniques
      return aUniques + bUniques
    };
    
    
    

//Who likes it?
//
//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//
//Note: For 4 or more names, the number in "and 2 others" simply increases.


// p: array of strings
// r: string of who likes this
// e: ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// p:
// switch for how many people like:
//   case 0:
//     return 'no one likes this'
//   case 1:
//     return `${names[0]} likes this`
//   case 2:
//     return `${names[0]} and ${names[1]} like this`
//   case 3:
//     return `${names[0]}, ${names[1]} and ${names[2]} like this `
//   case default:
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this `

function likes(names) {
    switch (names.length) {
    case 0:
      return 'no one likes this'
    case 1:
      return `${names[0]} likes this`
    case 2:
      return `${names[0]} and ${names[1]} like this`
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    } 
  }

//Maximum subarray sum
//
//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//-- should be 6: [4, -1, 2, 1]
//
//Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
//Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// p: array of numbers
// r: number, sum of contiguous subsequence
// e: maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // returns 6
// p:
// let maxSum = 0
// for every number in arr
//   if number <=0
//     break
//   let runningTotal = number
//   let subIndex = 0
//   while runningTotal > 0
    
//     runningTotal += arr[index + subIndex]
//     maxSum = Math.max(runningTotal, maxSum)
// return maxSum

var maxSequence = function(arr){
    if (arr.length === 0) return 0
    let maxSum = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <=0)
            continue
        let runningTotal = arr[i]
        maxSum = Math.max(runningTotal, maxSum)
        let subIndex = 1
        while (runningTotal > 0 && i + subIndex < arr.length){
            runningTotal += arr[i + subIndex]
            maxSum = Math.max(runningTotal, maxSum)
            subIndex++
        }
    }
    return maxSum
}
  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))