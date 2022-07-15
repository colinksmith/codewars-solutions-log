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