//Return the closest number multiple of 10
//
//Given a number return the closest number to it that is divisible by 10.
//Example input:
//22
//25
//37
//
//Expected output:
//20
//30
//40
//

const closestMultiple10 = num => {
    let count = 0
    if (num > 10) {
      num /= 10
      count++
    }
    num = Math.round(num)
    while (count > 0) {
      num *= 10
      count--
    }
    return num
  };