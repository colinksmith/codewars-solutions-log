//Divide and Conquer
//
//Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers. 
//Return as a number.

function divCon(x){
    let strings = x.filter(input => typeof input === 'string')
    let numbers = x.filter(input => typeof input === 'number')
    let stringSum = strings.reduce((prev, curr) => {
      return prev + Number(curr)
    }, 0)
    let numbersSum = numbers.reduce((prev, curr) =>{
      return prev + curr
    }, 0)
    return numbersSum - stringSum
  }