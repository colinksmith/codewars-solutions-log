//SevenAte9
//
//Write a function that removes every lone 9 that is inbetween 7s.
//"79712312" --> "7712312"
//"79797"    --> "777"
//

function sevenAte9(str) {
    return str.split('').filter((ele, index, arr) => {
      if (ele !== '9') {
        return true
      }
      if (arr[index - 1] !== '7' || arr[index + 1] !== '7') {
        return true
      }
      return false
    }).join('')
  }