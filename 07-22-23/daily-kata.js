//Sum - Square Even, Root Odd
//
//Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.
//The list will never be empty and will only contain values that are greater than or equal to zero.
//Good luck!

const sumSquareEvenRootOdd = ns => {
    let arr = ns.map((num, index) => {
      return num % 2 === 1 ? Math.sqrt(num) : num ** 2
    })
    return Number(arr
      .reduce((prev, curr) => {
        return prev + curr
      }, 0)
      .toFixed(2)
    )
  };