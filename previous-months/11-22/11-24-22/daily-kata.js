//Check three and two
//
//Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
//Examples
//["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
//["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
//["a", "a", "a", "a", "a"] ==> false // 5x "a"
//

function checkThreeAndTwo(array) {
    let aCount = 0
    let bCount = 0
    let a = ''
    let b = ''
    for (let i = 0; i < array.length; i++){
      if (!a) a = array[i]
      if (array[i] !== a && !b) b = array[i]
      if (array[i] !== a && array[i] !== b) return false
      if (array[i] === a) aCount++
      if (array[i] === b) bCount++
    }
    if (aCount === 3 && bCount === 2 || aCount === 2 && bCount === 3) return true
    return false
  }