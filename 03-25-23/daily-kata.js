//Find all occurrences of an element in an array
//
//Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
//If n is not in the given array, return an empty array [].
//Assume that n and all values in the given array will always be integers.
//Example:
//find_all([6, 9, 3, 4, 3, 82, 11], 3)
//> [2, 4]
//

const findAll = (array, n) => {
    const output = []
    array.forEach((num, index) => {
      if (num === n){
        output.push(index)
      }
    })
    return output
  }