//Disarium Number (Special Numbers Series #3)
//
//Definition
//Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
//
//Task
//Given a number, Find if it is Disarium or not . 
//
//Warm-up (Highly recommended)
//Playing With Numbers Series
//
//Notes
//
//Number passed is always  Positive .
//Return the result as String
//
//
//Input >> Output Examples
//disariumNumber(89) ==> return "Disarium !!"
//
//Explanation:
//
//Since , 81 + 92 = 89 , thus output is "Disarium !!"
//
//
//disariumNumber(564) ==> return "Not !!"
//
//Explanation:
//Since , 51 + 62 + 43 = 105 != 564 ,  thus output is "Not !!"
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

function disariumNumber(n){
    let arr = String(n).split('').map(ele => Number(ele))
    const disarium = arr.reduce((prev, curr, index) => {
      return prev + curr ** (index + 1)
    }, 0)
    return n === disarium ? 'Disarium !!' : 'Not !!'
  }