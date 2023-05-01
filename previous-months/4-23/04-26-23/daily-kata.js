//Plus - minus - plus - plus - ... - Count
//
//Count how often sign changes in array.
//result
//number from 0 to ... . Empty array returns 0
//example
//const arr = [1, -3, -4, 0, 5];
//
///*
//| elem | count |
//|------|-------|
//|  1   |  0    |
//| -3   |  1    |
//| -4   |  1    |
//|  0   |  2    |
//|  5   |  2    |
//*/
//
//catchSignChange(arr) == 2;
//

const catchSignChange = arr => {
    let count = 0
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < 0 && arr[i + 1] >= 0) {
        count++
      } else if (arr[i] >= 0 && arr[i + 1] < 0) {
        count++
      }
    }
    return count
  }