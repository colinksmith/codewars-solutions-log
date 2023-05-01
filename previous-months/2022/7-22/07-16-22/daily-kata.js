//Training JS #14: Methods of Number object--toString() and toLocaleString()
//
//This time we learn about two useful methods of Number objects: toString() and toLocaleString(). the basic usage of the two methods is to convert a number into a string. look at this:
//var num=111;
//var a=num.toString(), 
//    b=num.toLocaleString(), 
//    c=num+""
//console.log([a,b,c])   //put them to an array, we can see the quotes
////output: [ '111', '111', '111' ]
//
//We can see, if you just want to translate a number into a string representation, in the general case the results obtained in these ways is the same. I love to use the last one, cause I'm lazy ;-)
//But these two methods have other uses as well. 
//When used toLocaleString() converted a number to a string. the results obtained are in the order of the local numeric format(I don't have this experience. it is always the same as toString() in my here).
//And toString() of Number object has a more special usage: According to the base output different strings. 
//NumberObject.toString(radix)
//
//radix is optional parameter. if ignored it, the output will be the default decimal. If not, like this:
//var num=111;
//var a=num.toString(2), 
//    b=num.toString(8), 
//    c=num.toString(16), 
//console.log([a,b,c])
////output: [ '1101111', '157', '6f' ]
//
//They are converted to binary, octal and hexadecimal.
//Ok, lesson is over. let's us do some task with Number .toString().
//Task
//Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.
//Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.
//the color code should starting with "#". and then use 2 characters per color.
//for example:
//colorOf(255,0,0) should return "#ff0000"
//colorOf(0,111,0) should return "#006f00"
//colorOf(1, 2 ,3) should return "#010203"
//
//That's all of your work. My work is print your color code on your screen.
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

function colorOf(r,g,b){
    return `#${r.toString(16).padStart(2,0)}${g.toString(16).padStart(2,0)}${b.toString(16).padStart(2,0)}`
  }
  