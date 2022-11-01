//Summing a number's digits
//
//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.  
//For example: (Input --> Output)
//10 --> 1
//99 --> 18
//-32 --> 5
//
//Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    let numbersArray = String(number).split('')
    return numbersArray.reduce((prev, curr) => {
        currNum = Number(curr)
        if (curr === '-'){
            return prev
        }
      if (typeof currNum === 'number'){
        return prev += currNum
      } else {
        return prev
      }
    }, 0)
  }
 console.log(sumDigits(10))
 console.log(sumDigits(-103))