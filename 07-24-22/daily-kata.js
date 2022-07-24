//Training JS #13: Number object and its properties
//
//The number is a basic data type in javascript. javascript also supports Number objects. The object is the original value of the package object. When necessary, JavaScript automatically converts between the original data and the objects. You can explicitly create a Number object with the constructor Number(). Although it is not necessary to do so. Usage:
//var num=new Number(value);
//
//Parameter value is the value of the Number object to be created or the value to be converted into a numeric value.
//Constructor Number() can be used without operator new and directly as a transformation function to use. In this way, when the Number is called, it transforms itself into a number and then returns the converted value (or NaN).  Usage:
//var num=Number(value);
//
//Number object has two generic object properties: constructor and prototype. all the objects in JS have these two properties. they are two very important attributes. because of their importance and complexity, we will learn it in the future.
//In addition to the above two, the Number objects have five attributes (or called constant): 
//
//MAX_VALUE: The maximum number that can be expressed in JS. Usage:Number.MAX_VALUE. Its approximate value is 1.7976931348623157e+308
//
//MIN_VALUE: The minimum number that can be expressed in JS(Close to 0, but not negative). Usage:Number.MIN_VALUE. Its approximate value is 5e-324
//
//NaN: Non numeric value. Abbreviations of "Not a Number". When some arithmetic operations (such as the square root of a negative number) or the result of the method are not numbers, return NaN. Usage:Number.NaN. It can be simplified and replaced with NaN.
//
//
//  Please note: the results of comparison between NaN and other values are always not equal(including its own). Therefore, can not be compared with Number.NaN to detect a value is not a number but can only call isNaN() to compare. 
//
//NEGATIVE_INFINITY:    The value represents the negative infinity. Usage:Number.NEGATIVE_INFINITY. When a number is generated in an arithmetic operation or function and it smaller than -Number.MAX_VALUE return this value. It can be simplified and replaced with -Infinity.
//
//POSITIVE_INFINITY: The value represents the positive infinity. Usage:Number.POSITIVE_INFINITY. When a number is generated in an arithmetic operation or function and it larger than Number.MAX_VALUE return this value. It can be simplified and replaced with Infinity.
//
//
//Ok, lesson is over. let's us do some task with Number objects.
//Task
//Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.
//To judge the number n. If n is one of the above five constants, return one of these string:
//"Input number is Number.MAX_VALUE"
//"Input number is Number.MIN_VALUE"
//"Input number is Number.NaN"
//"Input number is Number.NEGATIVE_INFINITY"
//"Input number is Number.POSITIVE_INFINITY"
//
//Other values should return "Input number is xxx". xxx means this number.
//For example:
//whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
//whatNumberIsIt(100) should return "Input number is 100"
//
//What you need to think about is how to judge it correctly and effectively and don't forget isNaN().
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

function whatNumberIsIt(n){
    return n === Number.MAX_VALUE ? "Input number is Number.MAX_VALUE" :
           n === Number.MIN_VALUE ? "Input number is Number.MIN_VALUE" :
           isNaN(n) ? "Input number is Number.NaN" :
           n === Infinity ? "Input number is Number.POSITIVE_INFINITY" :
           n === -Infinity ? "Input number is Number.NEGATIVE_INFINITY" :
           `Input number is ${n}`
  }