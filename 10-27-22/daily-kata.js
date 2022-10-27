//Filter the number
//
//Filter the number
//Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
//Task
//Your task is to return a number from a string.
//Details
//You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var filterString = function(value) {
    return Number(value.split('')
                       .filter(letter => isNaN(Number(letter)) === false)
                       .join(''))
  }
  console.log(filterString("a1b2c3"))

//Char Code Calculation
//
//Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
//'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
//
//Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
//total1 = 656667
//              ^
//total2 = 656661
//              ^
//
//Then return the difference between the sum of the digits in total1 and total2:
//  (6 + 5 + 6 + 6 + 6 + 7)
//- (6 + 5 + 6 + 6 + 6 + 1)
//-------------------------
//                       6
//

function calc(x){
    let total1 = x.split('').map(x => x.charCodeAt(0)).join('')
    let total2 = String(total1)
    while (total2.includes('7')){
      total2 = total2.replace('7', '1')
    }
    return sumDigits(total1) - sumDigits(total2)
  }
  function sumDigits(num) {
    return String(num).split('').reduce((prev, curr) => {
      return prev + Number(curr)
    }, 0)
  }
  calc('abcdef')