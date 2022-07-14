//Grasshopper - Create the rooms
//
//Escape the room
//You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

var rooms = {
    room1: {name: 'room1', description: 'the first room', completed: false},
    room2: {name: 'room1', description: 'the first room', completed: false},
    room3: {name: 'room1', description: 'the first room', completed: false},
  
  }

//Training JS #16: Methods of String object--slice(), substring() and substr()
//
//From this lesson, we begin to learn about String objects. 
//First of all, we have a look at the attributes of String: length. Use StringObject.length to get the length of a string, like this:
//var str="dsfsdwesdfsadfwerfsdfsdfsdfsdfsdf";
//console.log(str.length)  //output: 33
//
//Secondly, a string can be like an array. each character in a string has an index. We can use the index to access this character. like this:
//var str="codewars";
//for (var i=0;i<str.length;i++) console.log(str[i])
////output:
//c
//o
//d
//e
//w
//a
//r
//s
//
//String Object has a lot of methods, many of these methods are used for web page text style and color modification. These methods are rarely used in programming and some of they are deprecated now. So we will omit the learning of these methods. These methods are:
//anchor()    Create HTML anchor.
//big()       Display a string in a large font.
//blink()     Display flashing string.
//bold()      Use bold display string.
//fixed()     Using a typewriter text display string.
//fontcolor() Displays a string using the specified color.
//fontsize()  Displays a string using the specified size.
//italics()   Use italics string.
//link()      Display a string as a link.
//small()     Use small size to display string.
//strike()    Use the delete line to display the string.
//sub()       Display the string as a subscript.
//sup()       Display the string as a superscript.
//
//This time we learn three methods that used to obtain the substring of the string:slice() substring() and substr(). Their usage:
//StringObject.slice(startindex,endindex)
//StringObject.substring(startindex,endindex)
//StringObject.substr(startindex,length)
//
//Here we use some examples to illustrate their usage and difference:
//var str="Hello World!";
//console.log(str.slice(6))
//console.log(str.substring(6))
//console.log(str.substr(6))
////output:
//World!
//World!
//World!
//
//We can see, the first parameter startindex can not be omitted, it represents the beginning of the interception of the string. Second parameter can be omitted, the three method will intercept the string to the end of the string. Look at the following example:
//var str="Hello World!";
//console.log(str.slice(0,5))
//console.log(str.substring(0,5))
//console.log(str.substr(0,5))
////output:
//Hello
//Hello
//Hello
//
//We can see, When the startindex is 0, the results obtained by the three methods are the same. But in fact, their operations are different. slice() and substring() intercepted characters from index0 to index5 (not including index5). substr  operation is to start from the index0, the interception of a substring of length 5. Look at the following example:
//var str="Hello beautiful World!";
//console.log(str.slice(6,16))
//console.log(str.substring(6,16))
//console.log(str.substr(6,9))
////output:
//beautiful 
//beautiful 
//beautiful
//
//We can see, In order to intercept the same string "beautiful", they use different parameters. Looks like substring and slice usage is similar, what is the difference between them? Look at the following example:
//var str="Hello beautiful World!";
//console.log(str.slice(16,21))
//console.log(str.substring(16,21))
//console.log(str.slice(16,-1))
////output:
//World
//World
//World
//
//From this example we can see that the parameters of the slice() can be a negative number. Negative meaning is starting from the right. -1 is first position from the right(at the end of that string).
//In a word, for silce() and substring(), we usually choose to use slice(), because it is more flexible and simple. We can choose to use them according to different needs.
//Ok, lesson is over. let's us do some task.
//Task
//Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
//The first mission: Traversing arr, find the shortest string length.
//The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
//for example:
//cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
//cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
//cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
//
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

function cutIt(arr){
    let min = Infinity
    arr.forEach(element => element.length < min ? min = element.length : min)
    return arr.map(element => element.slice(0, min))
}

//Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
//
//This time we learn about three useful methods of Number objects: toFixed(), toExponential() and toPrecision(). their purpose is to convert numbers into strings and the difference between them and toString() is:
//
//NumberObject.toFixed(n)
//toFixed() accepts 1 parameter n, returns a string representation of NumberObject. It does not use the exponential notation. after the decimal point has fixed n digit. If necessary, the number will be rounded or use "0" to make it reach the specified length. If number is greater than le+21, the method only calls NumberObject.toString() and returns a string that is represented by an exponential notation.
//
//NumberObject.toExponential(n) 
//toExponential() accepts 1 parameter n, returns NumberObject string representation, using the exponential count method. that is, there is one digit before the decimal point and n digits after the decimal point. The decimal part of the number is rounded. when necessary, with 0 to make up the specified length.
//
//NumberObject.toPrecision(n)
//toPrecision(n) accepts 1 parameter n, returns a string representation of NumberObject, contains n valid numbers. If num is large enough To include all the integer part of the NumberObject, then the returned string will use point counting method. otherwise using the exponential counting method.
//
//
//Simple introduction is abstract, not easy to understand. Here we use examples to explain the difference between them:
////example 1
//var num=111;
//var a=num.toFixed(), 
//    b=num.toExponential(), 
//    c=num.toPrecision()
//console.log([a,b,c])   //put them to an array, we can see the quotes
////output: [ '111', '1.11e+2', '111' ]
//
//We can see, if the parameter n is omitted, a and c return a string with the number of original state; b is returned a string using the exponential counting method, the string contains the decimal maximum possible.
////example 2
//var num=111.11;
//var a=num.toFixed(1), 
//    b=num.toExponential(1), 
//    c=num.toPrecision(1)
//console.log([a,b,c]) 
////output: [ '111.1', '1.1e+2', '1e+2' ]
//
//We can see, a returns a string with 1 decimal places, using fixed point counting method; b returns a string with 1 integer and 1 decimal places, using the exponential count method; c also uses the exponential count method, but returns a string with 1 integer.
////example 3
//var num=111.11;
//var a=num.toFixed(6), 
//    b=num.toExponential(6), 
//    c=num.toPrecision(6)
//console.log([a,b,c]) 
////output: [ '111.110000', '1.111100e+2', '111.110' ]
//
//We can see, a returns a string with 6 decimal places(make up with "0"), using fixed point counting method; b returns a string with 1 integer and 6 decimal places(make up with "0"), using the exponential count method; c returns a string with 3 integer and 3 decimal places(make up with "0"), returns the integer and decimal numbers in the string to a total of 6 digits.
//In a word, parameter n of toFixed() and toExponential() are used for digital fractional parts; parameter n of toPrecision() is used for the entire number. We can choose to use them according to different needs.
//Sometimes, it's not our ultimate goal to use these methods to convert the number into a string. We need to use the value after the change. What should we do?
//We need to learn two (or three) very useful global methods:parseInt() and parseFloat(). They can help you get the string back into the number. see the example learn to use them:
////example 4
//var num=111.1234;
//var s=num.toFixed(2)   //s=="111.12"
//var a=parseInt(s),
//    b=parseFloat(s),
//    c= +s
//console.log([a,b,c]) 
////output: [ 111, 111.12, 111.12 ]
//
//We can see, use parseInt(s) can convert s to an integer; use parseFloat(s) can convert s to a decimal; The '+' is a simplified form of the parseFloat()(when it is used in front of a string). 
//Ok, lesson is over. let's us do some task.
//Task
//Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal. 
//The first mission: let all elements in the array keep two decimal places(No need to convert number n). 
//The second mission: Traversal arr, count the number of the element which smaller than n and return it.
//for example:
//howManySmaller([1.234,1.235,1.228],1.24) should return 2
//howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
//howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
//
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


function howManySmaller(arr,n){
    return arr.map(ele => ele.toFixed(2)).reduce((prev, curr) => curr < n ? prev + 1 : prev,0)
  }
  

//Classy Extentions
//
//Classy Extensions
//extends
//Task
//'Mr Whiskers meows.'
//The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).
//Reference: JS, Ruby, Python.

class Cat extends Animal {
    speak() {
      return `${this.name} meows.`
    }
  }

//Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
//
//This time we learn three methods to retrieve the string:indexOf() lastIndexOf() and search(). Their usage:
//StringObject.indexOf(searchvalue,fromindex)
//StringObject.lastIndexOf(searchvalue,fromindex)
//StringObject.search(searchvalue/regexp)
//
//indexOf() retrieves a string from the location of the fromindex to the right (If fromindex is omitted, began retrieval from index0).
//lastIndexOf() retrieves a string from the location of the fromindex to the left (If fromindex is omitted, began retrieval from last chars).
//Usage of search() is similar to indexOf(). It is characterized by the support of regular expressions, but it always returns the position of the first match from the left side(This means that it does not support the option "g" of regular expressions). 
//Here we use some examples to illustrate their usage and difference:
//var str="Hello World!";
//console.log(str.indexOf("e"))
//console.log(str.lastIndexOf("e"))
//console.log(str.search("e"))
////output:
//1
//1
//1
//
//We can see, str.indexOf("e") equals str.lastIndexOf("e"), because there is only one "e" in str. Look at the following example:
//var str="Hello World!";
//console.log(str.indexOf("o"))
//console.log(str.lastIndexOf("o"))
//console.log(str.search("o"))
////output:
//4
//7
//4
//
//We can see, indexOf() returned 4 and lastIndexOf() returned 7. search() always returned the first "o". Look at the following example:
//var str="Hello World!";
//console.log(str.indexOf("o",5))
//console.log(str.lastIndexOf("o",5))
//console.log(str.search("o"))
////output:
//7
//4
//4
//
//We can see, indexOf() returned 7, because it start retrieves from index 5 to the right; lastIndexOf() returned 4 because it start retrieves from index 5 to the left;. search() always returned the first "o". Look at the following example:
//var str="Hello World!";
//console.log(str.indexOf("world"))
//console.log(str.lastIndexOf("world"))
//console.log(str.search(/world/i))
//console.log(str.search(/word/i))
////output:
//-1
//-1
//6
//-1
//
//From this example we can see that indexOf() and lastIndexOf() can not find "world" in str, because "World" and "world" are diffrent; search() uses a regular expression, the option i allows it to ignore the case(Regular expressions are powerful and complex, and we will learn it later). when the search string is not found, they always return -1;
//Ok, lesson is over. let's us do some task.
//Task
//Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char. 
//Please return the gap between the first position of c and the last position of c.
//If there are a lot of c in the str, should  return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.
//for example:
//firstToLast("ababc","a") should return 2(2-0)
//firstToLast("ababc","c") should return 0(4-4)
//firstToLast("ababc","d") should return -1
//
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

function firstToLast(str,c){
  if (str.indexOf(c) === -1) return -1
  let firstPosition = str.indexOf(c)
  let lastPosition = str.lastIndexOf(c)
  return lastPosition - firstPosition
}

//Is your period late?
//
//In this kata, we will make a function to test whether a period is late.
//Our function will take three parameters:
//last - The Date object with the date of the last period
//today - The Date object with the date of the check
//cycleLength - Integer representing the length of the cycle in days
//Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength){
  const diffInTime = today.getTime() - last.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.floor(diffInTime / oneDay)
  return diffInDays > cycleLength ? true : false
}

//Days in the year
//
//A variation of determining leap years, assuming only integers are used and years can be negative and positive.
//Write a function which will return the days in the year and the year entered in a string.  For example:
//yearDays(2000) returns "2000 has 366 days"
//
//There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.
//Also the basic rule for validating a leap year are as follows
//Most years that can be divided evenly by 4 are leap years. 
//Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.
//So the years 0, -64 and 2016 will return 366 days.
//Whilst 1974, -10 and 666 will return 365 days.

function yearDays(year){
  if (year % 400 === 0) return `${year} has 366 days`
  if (year % 100 === 0) return `${year} has 365 days`
  if (year % 4 === 0) return `${year} has 366 days`
  return `${year} has 365 days`

}

//Coefficients of the Quadratic Equation
//
//In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).
//Equation will be the form of ax^2 + bx + c = 0
//Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).
//Since there are infinitely many solutions to this problem, we fix a = 1.
//Remember, the roots can be written like (x-x1) * (x-x2) = 0
//Example
//quadratic(1,2) = (1, -3, 2)
//
//This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0
//Example 2
//quadratic(0,1) = (1, -1, 0)
//
//This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0
//Notes
//
//Inputs will be integers.
//When x1 == x2, this means the root has the multiplicity of two
//

function quadratic(x1, x2){
  return [1, (x1 + x2) * -1, x1 * x2 ]
}

//Training JS #29: methods of arrayObject---concat() and join()
//
//This lesson we learn two methods of array: concat() and join(). We have seen concat() in the stringObject method, but the method of the arrayObject  is different from the stringObject method, so we need to learn again. When studying the stringObject method split(), we have simply learned the join() method.  This time we will review and explain it in detail.
//Their definitions and syntax please refer to: 
//
//Array.prototype.concat()
//Array.prototype.join()
//
//(Please forgive me for my laziness;-)
//Here are some examples to help us understand the use of concat() and join():
//We first learn the concat() method, which can add some elements to the end of the array. concat() can have more and more parameters, and the parameter can be values, array or otherthings. Look this example:
//var arr1=[1,2,3],arr2=[4,5,6];
////The following ways can achieve the same purpose:
////It can use an array as parameter
//console.log(arr1.concat(arr2));
////also can use some values as parameters
//console.log(arr1.concat(4,5,6));
////also can use more than one array as parameters
//console.log(arr1.concat([4],[5],[6]));
////use ... accept the value of an enumeration
//console.log(arr1.concat(...arr2));
////It can be used continuously
//console.log(arr1.concat(4).concat(5).concat(6)); 
////output:
//[ 1, 2, 3, 4, 5, 6 ]
//[ 1, 2, 3, 4, 5, 6 ]
//[ 1, 2, 3, 4, 5, 6 ]
//[ 1, 2, 3, 4, 5, 6 ]
//[ 1, 2, 3, 4, 5, 6 ]
//
//concat() can be used for the flat output of two-dimensional or multidimensional arrays. look this example:
//var arr=[[1,2],[3,4],[5,6]];
//var result=[];
//for (var i=0;i<arr.length;i++) 
//  result=result.concat(arr[i]);
//console.log(result);    //output: [ 1, 2, 3, 4, 5, 6 ]
//
//This example by traversing the array and concat() method to get a one-dimensional array, which contains all the elements of the two-dimensional array. Or use more simple code:
//var arr=[[1,2],[3,4],[5,6]];
//var result=[].concat(...arr);
//console.log(result);    //output: [ 1, 2, 3, 4, 5, 6 ]
//
//...arr takes all the elements of arr (some one-dimensional array) as parameters of concat().
//Here we look at some examples of join(). Its main purpose is to merge the elements of an array into a string, using a parameter separator to connect each element. If the separator is omitted, the default separator is ",":
//var arr=[1,2,3,4,5];
//console.log(arr.join());      //output: 1,2,3,4,5
//console.log(arr.join(","));   //output: 1,2,3,4,5
//console.log(arr.join(" "));   //output: 1 2 3 4 5
//console.log(arr.join("and")); //output: 1and2and3and4and5
//
//One of its classic applications is to produce a specified number of repeating characters:
//function repeat(s,n){
//  return [...Array(n+1)].join(s);
//}
//console.log(repeat("a",5)); //output: aaaaa
//console.log(repeat("abc",5)); //output: abcabcabcabcabc
//
//It is also a good choice to connect multiple strings. When there is a large number of strings that need to be connected to a string, the use of the + operator speed is slow, the correct method should be to put them into the array, and then use the join() method:
////use + operator:
//var result="";
//for (var i=0;i<26;i++) 
//  result+=String.fromCharCode(97+i);
//console.log(result)   //output: abcdefghijklmnopqrstuvwxyz
////use join() method:
//var cache=[];
//for (var i=0;i<26;i++) cache[i]=String.fromCharCode(97+i);
//var result=cache.join("");
//console.log(result)   //output: abcdefghijklmnopqrstuvwxyz
//
//Of course, when the amount of data is very small, we do not feel the difference in speed.
//Ok, lesson is over. let's us do some task.
//Task
//Coding in function bigToSmall. function accept 1 parameter arr(2D number array). 
//Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.
//And then sort array in descending order.
//Finally, use the separator ">" to connect the elements into a string. 
//Don't complain about the situation like 1>1 is not reasonable, it is just a separator.
//Some example:
//bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
//bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
//bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
//
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

function bigToSmall(arr){
  let result =[].concat(...arr)
  return result.sort((a, b) => b - a).join('>')
}

//isReallyNaN
//
//I've hit a few bugs in my Java/Type/Coffee-script  code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.
//Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.
//Any solution is acceptable!

const isReallyNaN = (val) => {
  if (typeof val === 'number' && isNaN(val)) return true
  return false
};