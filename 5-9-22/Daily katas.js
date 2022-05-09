// Expressions Matter
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
// Input >> Output Examples:
// expressionsMatter(1,2,3)  ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

// expressionsMatter(1,1,1)  ==>  return 3
// Explanation:
// After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

// expressionsMatter(9,1,1)  ==>  return 18
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18.

// Playing with Numbers Series
// Playing With Lists/Arrays Series
// Bizarre Sorting-katas
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou

function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * b + c,
        a + b * c,
        a * (b + c),
        (a + b) * c,
    )
}

// Volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
}

// Powers of 2
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
function powersOfTwo(n){
    let accumulator = []
    for (let i = 0; i <= n; i++) {
        accumulator.push(2 ** i)
    }
    return accumulator
}

// What is between?
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    let list = []
    for (let i = a; i <= b; i++) {
        list.push(i)
    }
    return list
}

// Holiday VIII - Duty Free
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice * discount / 100))
}

// Convert to Binary
// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

function toBinary(n){
    return Number(n.toString(2))
}

// Surface Area and Volume of a Box
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    let volume = width * height * depth
    let area = width * height * 2 + height * depth * 2 + depth * width * 2
    return [area, volume]
}

// Smallest unused ID
// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids){
    let id = -1
    let i = 0
    while (id === -1) {
        if (ids.includes(i)){
            i++
            continue
        }
        id = i
        i++
    }
    return id
}

// Find the Remainder
// Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)
function remainder(n, m){
    return n < m ? m % n : n % m    
}

// Formatting decimal places #0
// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34
function twoDecimalPlaces(n) {
    return +n.toFixed(2)
}

// BASIC: Making Six Toast.
// Story:
// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

// Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):

// six_toast(12) == 6
function sixToast(num) {
    return Math.abs(num - 6)
}