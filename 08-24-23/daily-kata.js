//Number Pairs
//
//In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.
//Note: Both arrays have the same dimensions.
//Example:
//arr1 = new int[] { 13, 64, 15, 17, 88 };
//arr2 = new int[] { 23, 14, 53, 17, 80 };
//
//Kata.getLargerNumbers(arr1, arr2); // Returns {23, 64, 53, 17, 88}
//

function getLargerNumbers(a, b) {
    const output = []
    for (let i = 0; i < a.length; i++) {
      output.push(Math.max(a[i], b[i]))
    }
    return output
  }