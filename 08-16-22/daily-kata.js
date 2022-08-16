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

//Remove the minimum
//
//The museum of incredible dull things
//The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
//However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
//Task
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.
//Examples
//* Input: [1,2,3,4,5], output= [2,3,4,5]
//* Input: [5,3,2,1,4], output = [5,3,2,4]
//* Input: [2,2,1,2,1], output = [2,2,2,1]
//

function removeSmallest(numbers) {
    let numbersCopy = [...numbers]
    let min = Math.min(...numbersCopy)
    numbersCopy.splice(numbersCopy.indexOf(min), 1)
    return numbersCopy
  }

//The highest profit wins!
//
//Story
//Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
//Task
//Write a function that returns both the minimum and maximum number of the given list/array. 
//Examples (Input --> Output)
//[1,2,3,4,5] --> [1,5]
//[2334454,5] --> [5,2334454]
//[1]         --> [1,1]
//
//Remarks
//All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)]; // fix me!
  }