//Return Two Highest Values in List
//
//In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.
//The result should also be ordered from highest to lowest.
//Examples:
//[4, 10, 10, 9]  =>  [10, 9]
//[1, 1, 1]  =>  [1]
//[]  =>  []
//

function twoHighest(arr) {
    if(arr.length === 0){
      return []
    }else if (arr.length === 1){
        return arr
    }else{
    const sortedArr = Array.from(new Set(arr.sort((a, b) => b - a)))
    const max = sortedArr[0]
    const secondMax = sortedArr[1]
    return [max, secondMax]
    }
  }