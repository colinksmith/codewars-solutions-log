//Training JS #4: Basic data types--Array
//
//In javascript, Array is one of basic data types. Define an empty array can use var arr=new Array() or var arr=[]
//Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.
//Each element in the array has an index, use arr[index] to get the value of element.
//index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].
//If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:
//var arr=[1,2,3];     //define an array arr contains elements 1 2 3
//arr.push(4);         //add element 4 to arr
//console.log(arr)     //[1,2,3,4]
//arr.pop();           //remove the last element from arr
//console.log(arr)     //[1,2,3]
//
//Task
//I've written five function, each function receives a parameter: arr(an array), you should code something with arr.
//    1. getLength(arr)    should return length of arr
//    2. getFirst(arr)     should return the first element of arr
//    3. getLast(arr)      should return the last element of arr
//    4. pushElement(arr)  should push an element to arr, and then return arr
//    5. popElement(arr)   should pop an element from arr, and then return arr
//
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

function getLength(arr){
    //return length of arr
    return arr.length
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1]
  }
  function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el)
    return arr
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop()
    return arr
}