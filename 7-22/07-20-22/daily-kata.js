//Training JS #21: Methods of String object--trim() and the string template
//
//This is the last lesson about the string object, we will learn the two knowledge used to format the string. 
//The first is a simple method: trim(). Usage is very simple:
//stringObject.trim()
//
//Its role is very simple too: remove the whitespace at the edge of the string. example:
//var str="             abc                ";
//console.log(str.trim());
//str="\n\n\n\nabc\t\t\t"
//console.log(str.trim());
////output:
//abc
//abc
//
//Various non visible characters such as space tab are called whitespace. more detailed information please refer to:whitespace
//trim() only remove whitespace at edge of string,  whitespace in the middle of the string will not be removed.
//var str="  a b c  ";
//console.log(str.trim());
//
////output:
//a b c
//
//Next we will learn a new member of the ES6: string template, We look at the following code:
//var s1="My name is John.";
//var s2='My name is John.';
//var s3=`My name is John.`;
//
//Are their values equal? Yes, they are equal. Do you see the difference in s2 and s3? Bingo! single quotes ' and backtick ` are different. Of course, this is not the biggest difference between them. Using double quotes " or single quotes ', we get a fixed string value. Use the backtick `, we are defining a string template. 
//We can use ${variable} insert a variable into string template. like this:
//var a=1,b=2;
//console.log(`${a} + ${b} = ${a+b}`);
//
////output:
//1 + 2 = 3
//
//Or we can write this:
//function plus(a,b){
//  console.log(`${a} + ${b} = ${a+b}`);
//}
//plus(1,2);
//plus(3,4);
//
////output:
//1 + 2 = 3
//3 + 4 = 7
//
//Isn't it interesting? There are more interesting things to happen. When the string template appears in the back of a function, It will be used as a parameter. Look at the following example:
//function repeatIt(s){
//  console.log(`${s} ${s} ${s}`);
//}
//repeatIt `a`;
//repeatIt `ab`;
//
////output:
//a a a
//ab ab ab
//
//Ok, lesson is over. let's do some task.
//Task
//Coding in function fiveLine, function accept 1 parameter:s. s is a string.
//Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;
//Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.
//Note2: Using a string template can make your job easier.
//Example:
//fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
//a
//aa
//aaa
//aaaa
//aaaaa       <---The effect when you console.log it
//fiveLine("  xy ") 
//should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
//xy
//xyxy
//xyxyxy
//xyxyxyxy
//xyxyxyxyxy  <---The effect when you console.log it
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

function fiveLine(s){
    const trimmedS = s.trim()
    return `${trimmedS}\n${trimmedS.repeat(2)}\n${trimmedS.repeat(3)}\n${trimmedS.repeat(4)}\n${trimmedS.repeat(5)}`
  }