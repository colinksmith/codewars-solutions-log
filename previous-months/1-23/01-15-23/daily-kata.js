//Greatest common divisor
//
//Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution. 
//The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y){
    let min = Math.min(x, y)
    let max = Math.max(x, y)
    let output = 0
    let count = 1
    while (output === 0){
      if (max % (min / count) === 0) {
        output = min / count
      } else {
        count++
      }
    }
    return output
  }