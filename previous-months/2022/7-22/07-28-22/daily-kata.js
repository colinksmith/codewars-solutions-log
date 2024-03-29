//Classic Hello World
//
//You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything
//Note that for some languages, the function main is the entry point of the program.
//Here's how it will be tested:
//    java Solution.class parameter1 parameter2
//
//    Solution.main("parameter1","parameter2");
//
//    Solution.main "parameter1", "parameter2","parametern"
//
//    Solution.main("parameter1", "parameter2","parametern")
//
//    Solution.main("parameter1", "parameter2","parametern")
//
//   Solution.Main("parameter1", "parameter2","parametern")
//
//   Solution::main("parameter1", "parameter2", "parametern")
//
//   no extra lines there
//
//   greet:greet
//
//Hints:
//
//Check your references 
//Think about the scope of your method
//For prolog you can use write but there are better ways
//If you still don't get it probably you can define main as an attribute of the Solution class that accepts a single argument, and that only prints "Hello World!" without any return.
//

// Print "Hello World!" to the screen
  class Solution{
    constructor(arg){
    }
    static main(){
      console.log('Hello World!')
  
    }
  }

//Add new item (collections are passed by reference)
//
//Add an item to the list:
//AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
//In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.
//P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)

function addExtra( listOfNumbers ){
    listOfNumbers.push(13)
    let output = [...listOfNumbers]
    return output
  }

//Mr. Freeze
//
//There is an object/class already created called MrFreeze.  Mark this object as frozen so that no other changes can be made to it. 

// Object.freeze(MrFreeze)

//Find variable which breaks strict comparison!
//
//In JavaScript, there is a special case where strict comparison of the same variable returns false! 
//Try to find out what must be done to get such result!
//var x = something;
//x === x // returns false!
//
//Write a function which will return value for which strict comparison will give false!

function findStrangeValue() {
    return NaN
  }

//Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
//
//This lesson we learn the last three methods: isArray() indexOf() and toString(). Each of these three methods have their own purpose and put them together just because this is the last lesson of arrayObject ;-)
//For more information, please refer to: 
//
//Array.prototype.isArray()
//Array.prototype.indexOf() 
//Array.prototype.toString()
//
//Here are some examples to help us understand the use of isArray()  indexOf and toString():
//isarray() is a static method, its main-body can only be Array. it returns a Boolean value, which means that the parameter is an array or not. See example:
//var a=[1], b=1, c="1", d={1:1}, e=true;
//console.log(Array.isArray(a)); //true    a is an array
//console.log(Array.isArray(b)); //false   b is not an array
//console.log(Array.isArray(c)); //false   c is not an array
//console.log(Array.isArray(d)); //false   d is not an array
//console.log(Array.isArray(e)); //false   e is not an array
//
//It is often used to check the validity of the parameters. There are many other ways to determine the parameter type, and we will learn from the next lesson.
//We have seen indexOf() used for stringObject. The array object can also be used. its Usage is basically the same as the string object.
//It's usually used to determine whether an array contains an element or not. Its return value is the index of element. If there is no such element in the array, return -1. See example:
//var arr=[1,2,3,4,5];
//console.log(arr.indexOf(1));             //output: 0  arr[0]=1
//console.log(arr.indexOf(5));             //output: 4  arr[4]=5
//console.log(arr.indexOf(6));             //output: -1 no 6 in the array
//
//More examples please refer to #17: Methods of String object--indexOf(), lastIndexOf() and search()
//All objects in JS have toString() methods. Its function is to return a string representation of an object. Converting an object into a string, toString() is not the easiest way to do it. A lot of ways to do this: 
//var arr=[1,2,3,4,5];
//console.log(arr.toString()); //1,2,3,4,5
//console.log(arr+"");         //1,2,3,4,5
//console.log(arr.join());     //1,2,3,4,5
//
//Sometimes the performance of toString()' is not satisfactory, JSON.stringify() provides us with a more powerful feature:
//var arr1=["1","2","3","4","5"];
//console.log(arr1.toString());       //1,2,3,4,5
//console.log(JSON.stringify(arr1));  //["1","2","3","4","5"]
//
//var arr2=[[1,2],[3,4],[5]];
//console.log(arr2.toString());       //1,2,3,4,5
//console.log(JSON.stringify(arr2));  //[[1,2],[3,4],[5]]
//
//Ok, lesson is over. let's us do some task.
//Task
//Coding in function blackAndWhite. function accept 1 parameter arr(a number array). 
//If arr is not an array, function should return:
//"It's a fake array"
//
//If arr contains elements 5 and 13, function should return:
//"It's a black array"
//
//If arr contains neither 5 nor 13, function should return:
//"It's a white array"
//
//Examples
//blackAndWhite(5,13) should return "It's a fake array"
//blackAndWhite([5,13]) should return "It's a black array"
//blackAndWhite([5,12]) should return "It's a white array" 
//
//Using string template and ternary operator can make your work easier.
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

function blackAndWhite(arr){
    return Array.isArray(arr) === false ? "It's a fake array" :
    arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1 ? "It's a black array":
    "It's a white array"
}

//Training JS #34: methods of Math---pow() sqrt() and cbrt()
//
//In this lesson we learn three methods of Math: pow() sqrt() and cbrt(). Their usage is very simple: sqrt() returns the square root of a number; cbrt() returns the cube root of a number; pow() returns the base to the exponent power.
//Their definitions and detailed information:
//
//Math.pow()
//Math.sqrt()
//Math.cbrt()
//
//Here we use some examples to understand their usage:
//var arr1=[1,4,9];
//var sqroot=arr1.map(Math.sqrt);
//console.log(sqroot);            //output: [1,2,3]
//
//var arr2=[1,8,27];
//var cbroot=arr2.map(Math.cbrt);
//console.log(cbroot);            //output: [1,2,3]
//
//var arr3=[1,2,3];
//var pow2=arr3.map(x=>Math.pow(x,2));
//var pow3=arr3.map(x=>Math.pow(x,3));
//console.log(pow2);                  //output: [1,4,9]
//console.log(pow3);                  //output: [1,8,27]
//
//pow() can use a simplified form: ** operatorcan. See example:
//var n=2
//console.log(Math.pow(n,2));      //output: 4
//console.log(n*n);                //output: 4
//console.log(n**2);               //output: 4
//
//console.log(Math.pow(n,3));      //output: 8
//console.log(n*n*n);              //output: 8
//console.log(n**3);               //output: 8
//
//The second parameters of the pow() can be used as a fractional or decimal fraction, thus getting the same results as sqrt() and cbrt(). See example:
//var n=64;
//console.log(Math.sqrt(n));     //output: 8
//console.log(Math.pow(n,0.5));  //output: 8
//console.log(Math.pow(n,1/2));  //output: 8
//
//console.log(Math.cbrt(n));                      //output: 3.9999999999999996
//console.log(Math.pow(n,0.333333333333333333));  //output: 3.9999999999999996
//console.log(Math.pow(n,1/3));                   //output: 3.9999999999999996
//
//Look at the example above, what's the problem? Yes, the cube root of 64 should be 4, but we have not seen the 4, but see 3.9999999999999996. Due to the numerical precision of JS, the error will be produced in the calculation. This is a problem that can't be avoided. We should pay attention to this problem in use, look at the following example:
//function isCube(m,n){
//  return Math.cbrt(m)==n;
//}
//console.log(isCube(27,3))               //output: true
//console.log(isCube(64,4))               //output: false
//console.log(isCube(125,5))               //output: false
//
//This function is used to verify whether n is the cube root of m. It is obvious that the result is wrong. We should verify like this:
//function isCube(m,n){
//  return m==n**3;
//  //or: return m==n*n*n
//}
//console.log(isCube(27,3))               //output: true
//console.log(isCube(64,4))               //output: true
//console.log(isCube(125,5))              //output: true
//
//This method can also be used to verify the number of squares.
//The following three methods are used to verify that the square root of a number is an integer:
//function intRoot1(n){
//  return Number.isInteger(Math.sqrt(n));
//}
//function intRoot2(n){
//  return Math.sqrt(n)%1==0;
//}
//function intRoot3(n){
//  var x=Math.round(Math.sqrt(n));
//  return x*x==n;
//}
//
//console.log(intRoot1(16))               //output: true
//console.log(intRoot2(16))               //output: true
//console.log(intRoot3(16))               //output: true
//
//The third method is the longest, but it is the most stable one.
//Ok, lesson is over. let's us do some task.
//Task
//Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube. If we cut the cube into n block. please determine whether the length of the cube is an integer. return true or false. 
//For exmaple: 
//volume=27, it can be divided into 27 blocks, each small cube side length is 1
//cutCube(27,27) should return true
//
//volume=512, it can be divided into 8 blocks, each small cube side length is 4
//cutCube(512,8) should return true
//
//volume=512, it can be divided into 64 blocks, each small cube side length is 2
//cutCube(512,64) should return true
//
//If the side length of small cube is not a integer, should return false.
//cutCube(256,8) should return false
//cutCube(27,3) should return false
//cutCube(123,456) should return false
//
//If it can't be divided evenly into n small cubes, should return false too.
//cutCube(50000,50) should return false
//cutCube(256,4) should return false
//
//The two examples above seems to meet our requirements, but please note: a cube is unable to evenly divided into 50 pieces or 4 pieces. Only cubic numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly.
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

function cutCube(volume,n){
    if (Math.cbrt(volume) / Math.cbrt(n) % 1 === 0 &&
    Math.cbrt(n) % 1 === 0){
      return true
    } else {
      return false
    }
  }

//Help the Elite Squad of Brazilian forces BOPE
//
//The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.
//In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.
//You will receive the weapon and the number of streets that they have to cross.
//Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:
//PT92 - 17 bullets 
//M4A1 - 30 bullets 
//M16A2 - 30 bullets 
//PSG1 - 5 bullets 
//Example:
//["PT92", 6] => 2 (6 streets 3 bullets each) 
//["M4A1", 6] => 1
//The return Will always be an integer so as the params.

function magNumber(info){
    let key = {
      PT92: 17,
      M4A1: 30,
      M16A2: 30,
      PSG1: 5
    }
    return Math.ceil(info[1] * 3 / key[info[0]])
  }
  

//!a == a ?!
//
//You task to pass only this tests :
//
//a == false
//!a == false
//a == !a
//

const a = '0'

//Arguments to Binary addition
//
//Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.
//If your language can handle float binaries assume the array won't contain float or doubles.
//arr2bin([1,2]) == '11'
//arr2bin([1,2,'a']) == '11'
//arr2bin([]) == '0'
//
//NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
//
//arr2bin [1,2] == '11'
//arr2bin [1,2,'a'] == '11'
//arr2bin [] == '0'
//
//arr2bin([1,2]) == '11'
//arr2bin([1,2,'a']) == '11'
//arr2bin([]) == '0'
//
//This is a modification on the Kata: Array2Binary addition hope you like it

function arr2bin(arr){
    const output = arr.reduce((prev, curr) => {
      if (typeof curr === 'number'){
        return prev + curr
      } else {
        return prev
      }
    }, 0)
    if (1) {
      return output.toString(2) 
      }
  }

//Lexical this
//
//Lexical this
//Output
//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) {
        this._friends = f
      }
    }
    return person;
  }

//Do something "n.times" (Simplifying "for" loops)
//
//Do something "n.times" (Simplifying "for" loops)
//Overview
//In computer programming, we have a very basic but key principle called the DRY principle.  DRY stands for "Don't Repeat Yourself" which basically means that if you have multiple identical (or very similar) blocks of code you should probably simplify it.  This is very important because it usually makes the code more readable and understandable to fellow developers and because it always improves performance.
//For example, if we wanted to print "Hello World" to the console 100 times, we could write something like this:
//// UGH!  Disgusting!
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//console.log("Hello World");
//
//However, the problem is, the code is barely readable and looks very ugly.  How many times exactly is the string "Hello World" printed to the console?  Maybe it is only printed 99 times?  Maybe 1000?  Also, if there is an error in the statement/code (console.log), the same bug will have to be fixed 100 times and I doubt anyone would enjoy doing that.
//Luckily, in just about every modern high-level programming language, there exists a for loop that makes the code much more readable and DRY:
//// Much better :D
//for (var i = 0; i < 100; i++) {
//  console.log("Hello World");
//}
//
//By executing the same action 100 times by using a single for loop instead of copying and pasting the same code 100 times, the code becomes much more readable and easy to debug.  For example, if I misspelt "Hello World" I only need to fix it in one place to eliminate the bug as opposed to fixing it in every console.log statement.
//Task
//However, I myself find the for loop very complex and unreadable.  Think about it - would you know what the for loop does if you've never learned computer programming?  For example, if you've never coded before, would you have any idea what this thing in the for loop: i = 0; i < number; i++ means?
//Therefore, I would like you to define a method callable on integers, Number.prototype.times, that effectively replaces the for loop.  It should work like this:
//// Prints "Hello World" to the console 100 times
//// Isn't this much more readable?  At least a non-programmer
//// knows that something is being executed 100 times!
//(100).times(_ => {
//  console.log("Hello World");
//});
//
//Sometimes, we also want to loop through an array.  For example, if we have an array example = [1,2,3,4], we could use our newly defined method to loop over the array like this:
//example.length.times(_ => {
//  // Code to be executed
//});
//
//However, here lies the problem - since the function does not accept any arguments, how can we use this method to loop over every element in the array?  Therefore, your Number.prototype.times method should supply the iteration variable i to the anonymous function being executed to support this feature of looping through every element in an array, like such:
//example.length.times(i => {
//  console.log(example[i]);
//});
///* Prints the following to the console:
//1
//2
//3
//4
//*/
//
//The iteration variable supplied to the anonymous function could also be used like this:
//(100).times(i => {
//  console.log(i);
//});
///* Prints all integers from 0 (inclusive) to 100 (exclusive) */
//
//Task Summary
//In case you got lost, here's precisely what you have to do: define a method Number.prototype.times that accepts a function f as an argument and executes it as many times as the integer it is called on (e.g. (100).times would execute something 100 times).  The iteration variable i should be supplied to the anonymous function being executed in order to support looping through array elements.

Number.prototype.times = function (f) {
    for (let i = 0; i < parseInt(this); i++){
      f(i)
    }
  }

//Total pressure calculation
//
//Given the molecular mass of two molecules M1M_1M1​ and M2M_2M2​, their masses present m1m_1m1​ and m2m_2m2​ in a vessel of volume VVV at a specific temperature TTT, find the total pressure PtotalP_{total}Ptotal​ exerted by the molecules. Formula to calculate the pressure is: 
//Ptotal=(m1M1+m2M2)RTV\LARGE P_{total} = {{({{m_1} \over {M_1}} + {{m_2} \over {M_2}}) R T} \over V}Ptotal​=V(M1​m1​​+M2​m2​​)RT​
//Input
//Six values : 
//
//M1M_1M1​, M2M_2M2​: molar masses of both gases, in grams (ggg)
//m1m_1m1​ and m2m_2m2​: present mass of both gases, in   g⋅mol−1\ g \cdot mol^{-1} g⋅mol−1
//VVV: volume of the vessel, in  dm3\ dm^3 dm3
//TTT: temperature, in  °C\ \degree C °C
//
//Output
//One value: PtotalP_{total}Ptotal​, in units of atmatmatm.
//Notes
//Remember: Temperature is given in Celsius while SI unit is Kelvin (KKK).  0°C=273.15K\ 0\degree C = 273.15K 0°C=273.15K
//The gas constant  R=0.082dm3⋅atm⋅K−1⋅mol−1\ R = 0.082dm^3 \cdot atm \cdot K^{-1} \cdot mol^{-1} R=0.082dm3⋅atm⋅K−1⋅mol−1

function solution(molarMass1, molarMass2, givenMass1, givenMass2, volume, temp){
    return (((givenMass1 / molarMass1 + givenMass2 / molarMass2)*(0.082)*(temp + 273.15)) / volume)
}

//Circular Objects #1 - Running around in circles
//
//Circular Objects #1 - Running around in circles
//Overview
//A circular object is any object containing a property that refers to itself.  An example of a circular object can be found right here at Codewars - the very programming environment that they provide you with.  Just try it - print the details of the current programming environment to the console (I will not be giving you any hints - you'll have to figure this out yourself) and scroll through the printed text until you find a property named global.  As you would expect, the printed output would say that it is [circular].  Now let's try printing the global property of the programming envoronment to the console.  What do you see?  If you followed the instructions properly you would see the exact same thing being printed out!  Impressed?  You can test this further by then printing the global property of the global property of the current environment to the console and you would still see the exact same thing being printed.  In fact, no matter how many levels you go "inside" the object, you would still see the exact same thing being printed out.
//Which leads us to the task described below ... 
//Task
//Define a circular object circular such that the following are true:
//circular.value === "Hello World"
//circular === circular.self
//circular.self === circular.self.self
//
//... and so on.
//NOTE: The code above is pseudocode.  If you actually tested your circular object like this with equality or identity operators, it would not work as object literals do not have an intrinsic value.
//Articles of Interest
//Unfortunately, in this Kata, any article I recommend to you would immediately give away the solution so I have decided to not recommend any articles in this Kata of the series.  I apologise for any inconvenience caused.

const circular = {
    value: "Hello World",
    get self() {return this}
  }
  

//Configure package json for a node application
//
//Nodejs package.json
//Node applications require a file named package.json on the root of the project.
//You can create this file manually or have the command npm init to assist you in this process.
//The fields name and version are mandatory. But there a lot of other fields that you can include:
//for a documentation on all fields see https://docs.npmjs.com/files/package.json
//
//name: must be lowercase and url friendly
//version: must include major, minor and patch version
//description: can contain a description of your project
//main: the entry point of your application (when running node without args)
//scripts: a set of commands that can be executed with npm run <cmd>
//keywords: an array of strings containing keywords that describe your application
//bugs: an object with the url and/or email to contact about bugs
//license: a valid SPDX license or UNLICENSED (proprietary) or SEE LICENSE IN <filename>
//author: the name, email and url in a single string or an object with these three properties
//contributors: an array of items that follow the same rules as author
//repository: an object with type (e.g. git) and url (e.g. git url)
//private: true|false; if true the repository field can be omitted without any warnings
//preferGlobal: true|false; if your application is preferred to be installed globally
//engines: object listing engines and versions used by your application
//os: array of strings with supported OS
//cpu: array of strings with supported CPU
//dependencies: run-time dependencies of your application, things that will run in production
//devDependencies: compile-time dependencies of your application, things that should not be in production
//
//The dependencies is an object with the name of modules as keys and the values are the versions. For example to require babel in your application you would have these entries:
//{
//  "babel-core": "^6.0.0",
//  "babel-polyfill": "^6.0.0",
//  "babel-preset-es2015": "^6.0.0",
//  "babel-preset-stage-0": "^6.0.0"
//}
//
//Your task
//Create a package.json configuration and assign it to the configuration constant so it can be tested.
//To pass the kata you need only the least that a real package file would require.
//Notes
//
//the kata version validation doesn't handle all cases and isn't 100% accurate, so don't try to be too fancy, stick to with the simple
//to simplify the license validation this kata only allows the following
//ISC
//MIT
//UNLICENSED
//SEE LICENSE IN filename
//
//
//


//Vowel Count
//
//Return the number (count) of vowels in the given string. 
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    const key = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    }
    return str.split('').reduce((prev, curr) =>{
      if (curr in key) return prev += 1
      else return prev
    },0)
  }

//Disemvowel Trolls
//
//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    const key = ['a','e','i','o','u']
    return str.split('').filter((letter) => {
        return (!(key.includes(letter.toLowerCase())))
    }).join('')
  }