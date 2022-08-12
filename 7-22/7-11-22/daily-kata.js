//Logical calculator
//
//Your Task
//Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
//Examples
//
//booleans = [True, True, False], operator = "AND"
//
//
//True AND True  -> True
//True AND False -> False
//return False
//
//
//booleans = [True, True, False], operator = "OR"
//
//
//True OR True  -> True
//True OR False -> True
//return True
//
//
//booleans = [True, True, False], operator = "XOR"
//
//
//True XOR True  -> False
//False XOR False -> False
//return False
//
//Input
//
//an array of Boolean values (1 <= array_length <= 50)
//a string specifying a logical operator: "AND", "OR", "XOR"
//
//Output
//A Boolean value (True or False).

function logicalCalc(array, op)
{ 
  var result = array[0];
  for(var i = 1; i < array.length; i++)
  {
    if(op == "AND")
    {
      result = result && array[i];
    }
    if(op == "OR")
    {
      result = result || array[i];
    }
    if(op == "XOR")
    {
      result = result != array[i];
    }
  }
  return result;
}

//Training JS #12: loop statement --for..in and for..of
//
//In lesson #11, we learned that for loop can traverse the array. If we want to traverse an object, we can use the variant of the for: for..in, it can traverse all the keys of the object. an example:
//function showObjectKeys(obj){
//  for (var key in obj){
//    console.log(key);
//  }
//}
//function showObjectValues(obj){
//  for (var key in obj){
//    console.log(obj[key]);
//  }
//}
//var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
//console.log("keys of ob:")
//showObjectKeys(ob);
//console.log("values of ob:")
//showObjectValues(ob);
//
//Code results:
//keys of ob:
//item1
//item2
//item3
//item4
//values of ob:
//This
//is
//an
//example
//
//for..in can also be used in arrays, at this time the array is treated as an object. Modify the code above, we can see:
//function showObjectKeys(obj){
//  for (var key in obj){
//    console.log(key);
//  }
//}
//function showObjectValues(obj){
//  for (var key in obj){
//    console.log(obj[key]);
//  }
//}
//var arr=["one","two","three"];
//console.log("keys of arr:")
//showObjectKeys(arr);
//console.log("values of arr:")
//showObjectValues(arr);
//
//Code results:
//keys of arr:
//0
//1
//2
//values of arr:
//one
//two
//three
//
//We can see, keys is the index of the array elements. Need attention: When using for..in with an array, key(index) is always a string, not a number. In the example above, keys is "0", "1" and "2", we can't see the quotes because console.log() doesn't show it. 
//Although for..in can traverse the array, but we do not recommend the use of it. Because it has a flaw, in some cases, it may not be in accordance with the order of the array elements to traverse the array. So we recommend you use another variant:for..of(New member of ES6), it can traverse all the values of the array, if you don't care about its index. In the example above, function showObjectValues() can be modified like this:
//function showArrayValues(arr){
//  for (var value of arr){
//    console.log(value);
//  }
//}
//
//Ok, lesson is over, let's us do some task with for..in.
//Task
//Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.
//You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.
//Return the five after works finished.
//You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)
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

function giveMeFive(obj){
    let output = []
    for (let key in obj){
      if (key.length === 5){
        output.push(key)
      }
      if (obj[key].length === 5){
        output.push(obj[key])
      }
  
    }
    return output
  }