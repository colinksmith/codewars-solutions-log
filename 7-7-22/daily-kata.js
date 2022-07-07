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