//Reverse a Number
//
//Given a number, write a function to output its reverse digits.  (e.g. given 123 the answer is 321)
//Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
//Examples
// 123 ->  321
//-456 -> -654
//1000 ->    1
//

function reverseNumber(n) {
    let output = String(n).split('').reverse()
    if (output[output.length - 1] === '-'){
      output.pop()
      output.unshift('-')
    }
    return Number(output.join(''))
  }
  console.log(reverseNumber(-123))