//Double Sort
//
//Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
//Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type. 
//Note that numbers written as strings are strings and must be sorted with the other strings.

function dbSort(a){
    let numArr = []
    let strArr = []
    a.forEach(ele => {
      if (typeof ele === 'string' ) {
          strArr.push(ele)
        } else {
          numArr.push(ele)
        }
    })
    numArr.sort((a, b) => a - b)
    strArr.sort((a, b) => {
      for(let i = 0; i < a.length; i++){
        if (a.charCodeAt(i) - b.charCodeAt(i) === 0) continue
        return a.charCodeAt(i) - b.charCodeAt(i)
      }
    })
    return [...numArr, ...strArr]
  }