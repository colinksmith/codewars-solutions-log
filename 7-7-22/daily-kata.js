//Training JS #3: Basic data types--String
//
//In javascript, String is one of basic data types. Use "" or '' to declare a string variable. It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..
//String can use operators +, Connect two or more strings together.
//Task
//misson 1:
//I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).
//When you have finished the work, click "Run Tests" to see if your code is working properly.
//misson 2:
//After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3
//If everything is right, click "Submit" again to submit your code pass this kata.
//Series
//( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)
//
//#1: create your first JS function helloWorld
//#2: Basic data types--Number
//#3:  Basic data types--String
//#4:  Basic data types--Array
//#5:  Basic data types--Object
//#6:  Basic data types--Boolean and conditional statements if..else
//#7:  if..else and ternary operator
//#8: Conditional statement--switch
//#9: loop statement --while and do..while
//#10: loop statement --for
//#11: loop statement --break,continue
//#12: loop statement --for..in and for..of
//#13: Number object and  its properties
//#14: Methods of Number object--toString() and toLocaleString()
//#15: Methods of Number object--toFixed(), toExponential() and toPrecision()
//#16: Methods of String object--slice(), substring() and substr()
//#17: Methods of String object--indexOf(), lastIndexOf() and search()
//#18: Methods of String object--concat() split() and its good friend join()
//#19: Methods of String object--toUpperCase() toLowerCase() and replace()
//#20: Methods of String object--charAt() charCodeAt() and fromCharCode()
//#21: Methods of String object--trim() and the string template
//#22: Unlock new skills--Arrow function,spread operator and deconstruction
//#23: methods of arrayObject---push(), pop(), shift() and unshift()
//#24: methods of arrayObject---splice() and slice()
//#25: methods of arrayObject---reverse() and sort()
//#26: methods of arrayObject---map()
//#27: methods of arrayObject---filter()
//#28: methods of arrayObject---every() and some()
//#29: methods of arrayObject---concat() and join()
//#30: methods of arrayObject---reduce() and reduceRight()
//#31: methods of arrayObject---isArray() indexOf() and toString()
//#32: methods of Math---round() ceil() and floor()
//#33: methods of Math---max() min() and abs()
//#34: methods of Math---pow() sqrt() and cbrt()
//#35: methods of Math---log() and its family
//#36: methods of Math---kata author's lover:random()
//#37: Unlock new weapon---RegExp Object
//#38: Regular Expression--"^","$", "." and test()
//#39: Regular Expression--"?", "*", "+" and "{}"
//#40: Regular Expression--"|", "[]" and "()"
//#41: Regular Expression--""
//#42: Regular Expression--(?:), (?=) and (?!)
//

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}



//Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
//
//Description:
//Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//Examples
//remove("Hi!") === "Hi!"
//remove("Hi!!!") === "Hi!"
//remove("!Hi") === "Hi!"
//remove("!Hi!") === "Hi!"
//remove("Hi! Hi!") === "Hi Hi!"
//remove("Hi") === "Hi!"
//

function remove (string) {
    while (string.includes('!')){
        string = string.replace('!', '')
    }
    string += '!'
    return string
  }

//Return the day 
//
//Complete the function which returns the weekday according to the input number:
//
//1 returns "Sunday"
//2 returns "Monday"
//3 returns "Tuesday"
//4 returns "Wednesday"
//5 returns "Thursday"
//6 returns "Friday"
//7 returns "Saturday"
//Otherwise returns "Wrong, please enter a number between 1 and 7"
//

function whatday(num) { 
  const key = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday', 
  }
  return num in key ? key[num] : 'Wrong, please enter a number between 1 and 7'
}

//Training JS #10: loop statement --for
//
//for loop is one of the most frequently used loop statements in JS. It works like while loop. In lesson 9, we wrote a while loop:
//function sum1_100(){
//  var sum=0,num=1
//  while (num<=100){
//    sum+=num;
//    num++;
//  }
//  return sum;
//}
//
//We can rewrite it by using for loop, like this:
//function sum1_100(){
//  for (var sum=0,num=1;num<=100;num++){
//    sum+=num;
//  }
//  return sum;
//}
//
//As you see, there are three parts in the brackets, separated by ";". The first part is the initialization variable, this part will run before the loop starts. The second part is the conditional expressions, check the expression before the start of each time loops, when the value of the expression is false, loop will be terminated. The third part is the statement about increasing and decreasing variables, they will run after the code block.
//For the example above, the running order of the code is:
//                              <--- back to part 2
//                  -------------------------------------------
//                  |                 true                    |
//var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
//                                |  
//                           false|
//                       loop terminated
//
//When you need to traverse an array, you can use the for loop. look this example:
//function displayElements(array){
//  for (var i=0;i<array.length;i++){
//    console.log(array[i]);
//  }
//}
//
//This function will display every element of array on your screen.
//Ok, lesson is over, let's us do some task with for.
//Task
//Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.
//I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.
//If you forgot how to push an element to array, please refer to lesson 4.
//Series
//( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)
//
//#1: create your first JS function helloWorld
//#2: Basic data types--Number
//#3:  Basic data types--String
//#4:  Basic data types--Array
//#5:  Basic data types--Object
//#6:  Basic data types--Boolean and conditional statements if..else
//#7:  if..else and ternary operator
//#8: Conditional statement--switch
//#9: loop statement --while and do..while
//#10: loop statement --for
//#11: loop statement --break,continue
//#12: loop statement --for..in and for..of
//#13: Number object and  its properties
//#14: Methods of Number object--toString() and toLocaleString()
//#15: Methods of Number object--toFixed(), toExponential() and toPrecision()
//#16: Methods of String object--slice(), substring() and substr()
//#17: Methods of String object--indexOf(), lastIndexOf() and search()
//#18: Methods of String object--concat() split() and its good friend join()
//#19: Methods of String object--toUpperCase() toLowerCase() and replace()
//#20: Methods of String object--charAt() charCodeAt() and fromCharCode()
//#21: Methods of String object--trim() and the string template
//#22: Unlock new skills--Arrow function,spread operator and deconstruction
//#23: methods of arrayObject---push(), pop(), shift() and unshift()
//#24: methods of arrayObject---splice() and slice()
//#25: methods of arrayObject---reverse() and sort()
//#26: methods of arrayObject---map()
//#27: methods of arrayObject---filter()
//#28: methods of arrayObject---every() and some()
//#29: methods of arrayObject---concat() and join()
//#30: methods of arrayObject---reduce() and reduceRight()
//#31: methods of arrayObject---isArray() indexOf() and toString()
//#32: methods of Math---round() ceil() and floor()
//#33: methods of Math---max() min() and abs()
//#34: methods of Math---pow() sqrt() and cbrt()
//#35: methods of Math---log() and its family
//#36: methods of Math---kata author's lover:random()
//#37: Unlock new weapon---RegExp Object
//#38: Regular Expression--"^","$", "." and test()
//#39: Regular Expression--"?", "*", "+" and "{}"
//#40: Regular Expression--"|", "[]" and "()"
//#41: Regular Expression--""
//#42: Regular Expression--(?:), (?=) and (?!)
//

function pickIt(arr){
  var odd=[],even=[];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 1 ? odd.push(arr[i]) : even.push(arr[i])
  }
  
  
  return [odd,even];
}

//Training JS #8: Conditional statement--switch
//
//In javascript, switch is another condition statement.
//switch(n){
//  case 1:  
//    //code block
//    break;
//  case 2:
//    //code block
//    break;
//  case ...:
//    //code block
//    break;
//
//  default:       //default is optional, sometimes it can be omitted
//    //code block
//                 //The last one does not need break
//}
//
//switch is the keyword, n is the variable to switch, case 1 means when n===1, following the ":",you can add some executable statement, with keyword break as termination(if you forgot "break", code will running with case 2, case 3...until a "break" appear),default like else in the if..else statement.
//In some cases, use the switch statement to look more clearly than the if..else statement.
//For example, we can write a function to calculate what day is today, like this:
//function whatDayIsToday(n){
//  //getDay() is a methods of Date(), we will learn them later.
//  var day=new Date().getDay(),x; 
//  switch (day){
//    case 0:
//      x="Today it's Sunday";
//      break;
//    case 1:
//      x="Today it's Monday";
//      break;
//    case 2:
//      x="Today it's Tuesday";
//      break;
//    case 3:
//      x="Today it's Wednesday";
//      break;
//    case 4:
//      x="Today it's Thursday";
//      break;
//    case 5:
//      x="Today it's Friday";
//      break;
//    case 6:
//      x="Today it's Saturday";
//      break;
//  }
//  return x;
//}
//
//Task
//Complete function howManydays, function accept 1  parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
//+---------------+-------------+
//|    month      |    days     |
//+---------------+-------------+
//|1,3,5,7,8,10,12|     31      |
//+---------------+-------------+
//|4,6,9,11       |     30      |
//+---------------+-------------+
//|2              |     28      |  (Do not consider the leap year)
//+---------------+-------------+
//
//little tips: Use default for most of the cases can reduce your work.
//When you have finished the work, click "Run Tests" to see if your code is working properly.
//In the end, click "Submit" to submit your code pass this kata.
//Series
//( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)
//
//#1: create your first JS function helloWorld
//#2: Basic data types--Number
//#3:  Basic data types--String
//#4:  Basic data types--Array
//#5:  Basic data types--Object
//#6:  Basic data types--Boolean and conditional statements if..else
//#7:  if..else and ternary operator
//#8: Conditional statement--switch
//#9: loop statement --while and do..while
//#10: loop statement --for
//#11: loop statement --break,continue
//#12: loop statement --for..in and for..of
//#13: Number object and  its properties
//#14: Methods of Number object--toString() and toLocaleString()
//#15: Methods of Number object--toFixed(), toExponential() and toPrecision()
//#16: Methods of String object--slice(), substring() and substr()
//#17: Methods of String object--indexOf(), lastIndexOf() and search()
//#18: Methods of String object--concat() split() and its good friend join()
//#19: Methods of String object--toUpperCase() toLowerCase() and replace()
//#20: Methods of String object--charAt() charCodeAt() and fromCharCode()
//#21: Methods of String object--trim() and the string template
//#22: Unlock new skills--Arrow function,spread operator and deconstruction
//#23: methods of arrayObject---push(), pop(), shift() and unshift()
//#24: methods of arrayObject---splice() and slice()
//#25: methods of arrayObject---reverse() and sort()
//#26: methods of arrayObject---map()
//#27: methods of arrayObject---filter()
//#28: methods of arrayObject---every() and some()
//#29: methods of arrayObject---concat() and join()
//#30: methods of arrayObject---reduce() and reduceRight()
//#31: methods of arrayObject---isArray() indexOf() and toString()
//#32: methods of Math---round() ceil() and floor()
//#33: methods of Math---max() min() and abs()
//#34: methods of Math---pow() sqrt() and cbrt()
//#35: methods of Math---log() and its family
//#36: methods of Math---kata author's lover:random()
//#37: Unlock new weapon---RegExp Object
//#38: Regular Expression--"^","$", "." and test()
//#39: Regular Expression--"?", "*", "+" and "{}"
//#40: Regular Expression--"|", "[]" and "()"
//#41: Regular Expression--""
//#42: Regular Expression--(?:), (?=) and (?!)
//

function howManydays(month){
  var days;
  switch (month){
    case 4:
    case 6:
    case 9:
    case 11:
      return 30
    case 2:
      return 28
    default:
      return 31
  }
//   return days;
}

//Thinkful - Number Drills: Pixelart planning
//
//You're laying out a rad pixel art mural to paint on your living room wall in homage to Paul Robertson, your favorite pixel artist.
//You want your work to be perfect down to the millimeter. You haven't decided on the dimensions of your piece, how large you want your pixels to be, or which wall you want to use. You just know that you want to fit an exact number of pixels.
//To help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.
//Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.
//Note: you don't need to use an if statement here. Remember that in Python an expression using the == comparison operator will evaluate to either True or False:
//>>> def equals_three(num):
//>>>     return num == 3
//>>> equals_three(5)
//False
//>>> equals_three(3)
//True
//

function isDivisible(wallLength, pixelSize){
  return wallLength % pixelSize === 0
}

//Sum of Multiples
//
//Your Job
//  Find the sum of all multiples of n below m 
//Keep in Mind
//
//n and m are natural numbers (positive integers)
//m is excluded from the multiples
//
//Examples
//sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
//sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
//sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
//sumMul(4, -7)  ==> "INVALID"
//
//Kata.SumMul(2, 9)   => 2 + 4 + 6 + 8 = 20
//Kata.SumMul(3, 13)  => 3 + 6 + 9 + 12 = 30
//Kata.SumMul(4, 123) => 4 + 8 + 12 + ... = 1860
//Kata.SumMul(4, 1)   // throws ArgumentException
//Kata.SumMul(0, 20)  // throws ArgumentException
//
//sum_mul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
//sum_mul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
//sum_mul(4, 123) ==> 4 + 8 + 12 + ... = 1860
//sum_mul(4, -7)  ==> "INVALID"
//
//Kata.sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
//Kata.sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
//Kata.sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
//Kata.sumMul(4, -7)  // throws IllegalArgumentException
//

function sumMul(n,m){
  if (m < 1) {
    return 'INVALID'
  }
  let output = 0
  for (let i = 1; i * n < m; i++){
    output += n * i
  }
  return output
}

//Man in the west
//
//A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.
//So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

function checkTheBucket(bucket){
  return bucket.includes('gold')
}