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
  