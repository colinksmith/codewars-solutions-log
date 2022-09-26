//Sorted? yes? no? how?
//
//Complete the method which accepts an array of integers, and returns one of the following:
//
//"yes, ascending" - if the numbers in the array are sorted in an ascending order
//"yes, descending" - if the numbers in the array are sorted in a descending order
//"no" - otherwise
//
//You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let arraySortedAsc = [...array].sort((a, b) => a - b)
  let arraySortedDesc = [...array].sort((a, b) => b - a)
    if (isArraySameValue(array, arraySortedAsc)){
      return 'yes, ascending'
    } else if (isArraySameValue(array, arraySortedDesc)){
      return 'yes, descending'
    } else {
      return 'no'
    }
  }
  function isArraySameValue(arr1, arr2){
    return arr1.every((element, index) => {
      if(element !== arr2[index]){
        return false
      }
      return true
    }) 
  }