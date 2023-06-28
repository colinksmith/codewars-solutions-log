//Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
//
//This time we learn three string methods used to change the contents of the string:toUpperCase() toLowerCase() and replace().  Their usage:
//stringObject.toUpperCase()
//stringObject.toLowerCase()
//stringObject.replace(substring/regexp,replacement)
//
//toUpperCase() and toLowerCase() usage is very simple. No parameters needs accept. It can convert all the characters in the string to uppercase or lowercase. like this:
//var str="My name is John";
//console.log(str.toUpperCase());
//console.log(str.toLowerCase());
////output:
//MY NAME IS JOHN
//my name is john
//
//The following is a classic usage. Capitalize the first letter of a sentence:
//var str="this is an example.";
//var result=str[0].toUpperCase()+str.slice(1);
//console.log(result);
//
////output:
//This is an example.
//
//The example below is to capitalize the first letter of all the words in the sentence. We used the split() and join() that we learned last time. 
//var str="this is an example.";
//var words=str.split(" ");
//for (var i=0;i<words.length;i++){
//  words[i]=words[i][0].toUpperCase()+words[i].slice(1);
//}
//console.log(words.join(" "));
//
////output:
//This Is An Example.
//
//It seems a bit complicated. Let's learn new method to improve it.
//replace() can replace the text specified(parameter 1) in the string with parameter 2. For example:
//var str="this is an example.";
//var result=str.replace("this","that");
//console.log(result);
//
////output:
//that is an example.
//
//Let's use replace() to improve the example above (capitalized the first letter):
//var str="this is an example.";
//var words=str.split(" ");
//for (var i=0;i<words.length;i++){
//  words[i]=words[i].replace(words[i][0],words[i][0].toUpperCase());
//}
//console.log(words.join(" "));
//
////output:
//This Is An Example.
//
//If the parameter 1 of replace() is a regular expression, it will be more simple(We don't even need to split the string):
//var str="this is an example.";
//var result=str.replace(/\b\w/g,x=>x.toUpperCase());
//console.log(result);
//
////output:
//This Is An Example.
//
//This code uses a regular expression and an arrow function. This allows us to achieve a more powerful role in the code. All of these will be learning in the future lesson. We need to do now is to learn the basics.
//Another point needs to pay attention: If replace() uses a regular expression as parameter 1, and all the characters that match the regular expression are replaced(The regular expression uses a global matching option g). If we use a string as a parameter 1, only the first match(from left to right) of the string is replaced. like this:
//var str="example";
//var result=str.replace("e","@");
//console.log(result);
//
////output:
//@xample
//
//As you can see, the second "e" will not be replaced.
//Ok, lesson is over. let's us do some task.
//Task
//Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.
//We translate the sentence into an alien language according to the following rules:
//Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)
//for example:
//alienLanguage("My name is John") should return "My NAMe Is JOHn"
//alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
//alienLanguage("Hello World") should return "HELLo WORLd"
//
//A small hint: The first conversion of the entire string will make the code easier
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

function alienLanguage(str){
    str = str.split(' ')
      .map(word => {
        word = word.toUpperCase()
        word = word.slice(0, word.length - 1) + word.toLowerCase().slice(word.length - 1)
      return word
      })
    return str.join(' ')
  }