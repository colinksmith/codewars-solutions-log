//How many consecutive numbers are needed?
//
//Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.
//For example:  If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

function consecutive(arr) {
    if (arr.length === 0) return 0
    let max = Math.max(...arr) || 0
    let min = Math.min(...arr) || 0
    return (max - min - arr.length + 1)
  }