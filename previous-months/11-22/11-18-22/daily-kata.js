//Stanton measure
//
//The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array. 
//Write a function which takes an integer array and returns its Stanton measure.
//Examples
//The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.
//The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

function stantonMeasure(arr){
    let oneCount = 0
    let stantonCount = 0
    arr.forEach(num => {
        if (num === 1) oneCount++
    })
    arr.forEach(num => {
        if (num === oneCount) stantonCount++
    })
    return stantonCount
  }
  stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])