//Sum of Odd Cubed Numbers
//
//Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    if (arr.some(ele => typeof ele !== 'number')) return undefined
    let output = arr.filter(num => Math.abs(num) % 2 === 1)
                    .map(num => num ** 3)
                    .reduce((prev, curr) => prev + curr, 0)
    return output
  }