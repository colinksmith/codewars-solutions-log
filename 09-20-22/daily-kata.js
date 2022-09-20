//Factorial
//
//Your task is to write function factorial.
//https://en.wikipedia.org/wiki/Factorial

function factorial(n){
    if (n === 0) return 1
    let output = 1
    for (let i = 1; i <= n; i++){
      output *= i
    }
    return output
  }