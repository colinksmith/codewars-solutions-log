//Double Every Other
//
//Write a function that doubles every second integer in a list, starting from the left.
//Example:
//For input array/list :
//[1,2,3,4]
//
//the function should return :
//[1,4,3,8]
//

function doubleEveryOther(a) {
    return a.map((num, index) => {
      return index % 2 === 1 ? num * 2 : num
    })
  }