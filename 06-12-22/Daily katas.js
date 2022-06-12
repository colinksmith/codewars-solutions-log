// Super Duper Easy
// DESCRIPTION:
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
    if (typeof x === 'string'){
        return 'Error'
    } else {
        return x * 50 + 6
    }
}

// Training JS #7: if..else and ternary operator
// In JavaScript, if..else is the most basic condition statement, it consists of three parts:condition, statement1, statement2, like this:

// if (condition) statementa
// else           statementb
// It means that if the condition is true, then execute the statementa, otherwise execute the statementb.If the statementa or statementb more than one line, you need to add { and } at the head and tail of statement in JS, to keep the same indentation on Python and to put a end in Ruby where it indeed ends.

// An example, if we want to judge whether a number is odd or even, we can write code like this:

// function oddEven(n){
//   if (n%2==1) return "odd number";
//   else        return "even number";
// }
// If there is more than one condition to judge, we can use the compound if...else statement. an example:

// function oldYoung(age){
//   if (age<16)      return "children"
//   else if (age<50) return "young man"   //use "else if" if needed
//   else             return "old man"
// }
// This function returns a different value depending on the parameter age.

// Looks very complicated? Well, JS and Ruby also support the ternary operator and Python has something similar too:

// condition ? statementa : statementb
// Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; in Python you put the condition in the middle of two alternatives. The two examples above can be simplified with ternary operator:

// function oddEven(n){
//   return n%2==1 ? "odd number" : "even number";
// }
// function oldYoung(age){
//   return age<16 ? "children" : age<50 ? "young man" : "old man";
// }
// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.
// Series:
// ( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)

// #1: create your first JS function helloWorld
// #2: Basic data types--Number
// #3: Basic data types--String
// #4: Basic data types--Array
// #5: Basic data types--Object
// #6: Basic data types--Boolean and conditional statements if..else
// #7: if..else and ternary operator
// #8: Conditional statement--switch
// #9: loop statement --while and do..while
// #10: loop statement --for
// #11: loop statement --break,continue
// #12: loop statement --for..in and for..of
// #13: Number object and its properties
// #14: Methods of Number object--toString() and toLocaleString()
// #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// #16: Methods of String object--slice(), substring() and substr()
// #17: Methods of String object--indexOf(), lastIndexOf() and search()
// #18: Methods of String object--concat() split() and its good friend join()
// #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
// #21: Methods of String object--trim() and the string template
// #22: Unlock new skills--Arrow function,spread operator and deconstruction
// #23: methods of arrayObject---push(), pop(), shift() and unshift()
// #24: methods of arrayObject---splice() and slice()
// #25: methods of arrayObject---reverse() and sort()
// #26: methods of arrayObject---map()
// #27: methods of arrayObject---filter()
// #28: methods of arrayObject---every() and some()
// #29: methods of arrayObject---concat() and join()
// #30: methods of arrayObject---reduce() and reduceRight()
// #31: methods of arrayObject---isArray() indexOf() and toString()
// #32: methods of Math---round() ceil() and floor()
// #33: methods of Math---max() min() and abs()
// #34: methods of Math---pow() sqrt() and cbrt()
// #35: methods of Math---log() and its family
// #36: methods of Math---kata author's lover:random()
// #37: Unlock new weapon---RegExp Object
// #38: Regular Expression--"^","$", "." and test()
// #39: Regular Expression--"?", "*", "+" and "{}"
// #40: Regular Expression--"|", "[]" and "()"
// #41: Regular Expression--""
// #42: Regular Expression--(?:), (?=) and (?!)
function saleHotdogs(n){
    return n < 5 ? n * 100 : 
    n < 10 ? n * 95 :
    n * 90
}

// Training JS #1: create your first JS function and print "Hello World!"
// DESCRIPTION:
// In JavaScript, your code is running in a function, let us step by step complete your first JS function.

// Look at this example:

//       --------keyword "function"
//       |       ----your function name  
//       |       |    ---if needed, some arguments will appear in brackets
//       |       |    |
//     function myfunc(){  ---------your function code will starting with "{"
//       //you should type your code here
//     }----------------------------ending with "}"
// If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

// function printWordToScreen(){
//   var somewords="This is an example."
//   console.log(somewords)
// }
// If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method help your work, you will become more and more like it.

// Task
// Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

// type the console.log() in the next line(don't forget to put the str in the brackets).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function helloWorld(){
    let str = 'Hello World!'
    console.log(str)
}

// 5 without numbers !!
// DESCRIPTION:
// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

function unusualFive() {
    return 'fives'.length
}

// Find Multiples of a Number
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function findMultiples(integer, limit) {
    let acc = []
    for (let i = 1; i <= limit / integer; i++){
        acc.push(i * integer)
    }
    return acc
}
  

// Grasshopper - Terminal game combat function
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    return health - damage < 0 ? 0 :
    health - damage
}