//Jumping Number (Special Numbers Series #4)
//
//Definition
//Jumping number is the number that All adjacent digits in it differ by 1.
//
//Task
//Given a number, Find if it is Jumping or not . 
//
//Warm-up (Highly recommended)
//Playing With Numbers Series
//
//Notes
//
//Number passed is always  Positive .
//
//Return the result as String . 
//
//The difference between ‘9’ and ‘0’ is not considered as 1 . 
//
//All single digit numbers are considered as Jumping numbers. 
//
//
//
//Input >> Output Examples
//jumpingNumber(9) ==> return "Jumping!!"
//
//Explanation:
//
//It's  single-digit number 
//
//
//jumpingNumber(79) ==> return "Not!!"
//
//Explanation:
//
//Adjacent digits don't differ by 1
//
//
//jumpingNumber(23) ==> return "Jumping!!"
//
//Explanation:
//
//Adjacent digits differ by 1
//
//
//jumpingNumber(556847) ==> return "Not!!"
//
//Explanation:
//
//Adjacent digits don't differ by 1
//
//
//jumpingNumber(4343456) ==> return "Jumping!!"
//
//Explanation:
//
//Adjacent digits differ by 1
//
//
//jumpingNumber(89098) ==> return "Not!!"
//
//Explanation:
//
//Adjacent digits don't differ by 1
//
//
//jumpingNumber(32) ==> return "Jumping!!"
//
//Explanation:
//
//Adjacent digits differ by 1
//
//
//
//
//Playing with Numbers Series
//Playing With Lists/Arrays Series
//For More Enjoyable Katas
//
//ALL translations are welcomed
//Enjoy Learning !!
//Zizou

function jumpingNumber(n){
    n = String(n).split('')
    let bool = n.every((digit, index, arr) => {
      if (!arr[index - 1] || !arr[index + 1]) {
        return true
      } else if (Math.abs(digit - arr[index - 1]) !== 1 ) {
        return false
      } else if (Math.abs(digit - arr[index + 1]) !== 1 ) {
        return false
      }
      return true
    })
    if (n.length === 2) {
      if (Math.abs(n[0] - n[1]) !== 1 ) {
        bool = false
      }
    }
    return bool ? 'Jumping!!' : 'Not!!'
  }