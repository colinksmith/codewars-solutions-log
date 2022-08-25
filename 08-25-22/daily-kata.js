//Make a function that does arithmetic!
//
//Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them. 
//a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
//The four operators are "add", "subtract", "divide", "multiply". 
//A few examples:(Input1, Input2, Input3 --> Output)
//5, 2, "add"      --> 7
//5, 2, "subtract" --> 3
//5, 2, "multiply" --> 10
//5, 2, "divide"   --> 2.5
//
//Try to do it without using if statements!

function arithmetic(a, b, operator){
    switch(operator){
      case 'add':
        return a + b
      case 'subtract':
        return a - b
      case 'multiply':
        return a * b
      case 'divide':
        return a / b
    }
  }

//Sum of all the multiples of 3 or 5
//
//Your task is to write function findSum.
//Upto and including n, this function will return the sum of all multiples of 3 and 5.
//For example:
//findSum(5) should return 8 (3 + 5)
//findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
    let output = 0
    for(let i = 1; i <= n; i++){
      if (i % 3 === 0 || i % 5 === 0){
        output += i
      }
    }
    return output
  }