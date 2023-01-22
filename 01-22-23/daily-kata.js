//Debug Sum of Digits of a Number
//
//Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
//Example
//123  => 6
//223  => 7
//1337 => 14
//

function getSumOfDigits(integer) {
    var sum = null;
    var digits =  integer.toString();
    for(var ix = 1; ix <= digits.length; ix++) {
      sum += Number(digits[ix - 1])
    }
    return sum;
  }
  getSumOfDigits(123)