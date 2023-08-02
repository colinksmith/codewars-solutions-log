//Fruit string calculator
//
//You are given a string of words and numbers. Extract the expression including: 
//
//the operator: either addition ("gains") or subtraction ("loses")
//the two numbers that we are operating on
//
//Return the result of the calculation.
//Notes:
//
//"loses" and "gains" are the only two words describing operators
//No fruit debts nor bitten apples = The numbers are integers and no negatives
//
//Examples
//"Panda has 48 apples and loses 4"  -->  44
//"Jerry has 34 apples and gains 6"  -->  40
//
//Should be a nice little kata for you :)

function calculate(string) {
    let arr = string.split(' ')
    let output = 0
    let nums = arr.filter(x => parseInt(x))
    if (arr.includes('gains')) {
      output = +nums[0] + +nums[1]
    } else if (arr.includes('loses')) {
      output = nums[0] - nums[1]
    }
    return output
  }