//Length and two values.
//
//Given an integer n and two other values, build an array of size n filled with these two values alternating.
//Examples
//5, true, false     -->  [true, false, true, false, true]
//10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
//0, "one", "two"    -->  []
//
//Good luck!

function alternate(n, firstValue, secondValue){
    let output = []
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 1) {
        output.push(firstValue)
      } else if (i % 2 === 0) {
        output.push(secondValue)
      }
    }
    return output
  }