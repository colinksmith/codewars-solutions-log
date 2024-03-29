//Grasshopper - Terminal Game #1
//
//Terminal Game - Create Hero Prototype
//In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
//
//
//
//attribute
//value
//
//
//
//name
//user argument or 'Hero'
//
//
//position
//'00'
//
//
//health
//100
//
//
//damage
//5
//
//
//experience
//0
//
//

function Hero (name = 'Hero') {

    this.name = name
    this.position = '00'
    this.health = 100
    this.damage = 5
    this.experience = 0
  
}

//Training JS #18: Methods of String object--concat() split() and its good friend join()
//
//This time we learn two methods to split or merge string:split() and concat(). also learn a good friend of the split() method: join(). It is an Array method. Their usage:
//stringObject.split(separator,howmany)
//stringObject.concat(string1,string2,...,stringx)
//arrayObject.join(separator)
//
//split() can divided a string into several parts by a specified separator. The result is an array of strings. The split string does not include the separator itself. One of its classic uses is to divide a sentence into an array of words:
//var str="My name is John";
//var words=str.split(" ");
//console.log(words);
////output:
//[ 'My', 'name', 'is', 'John' ]
//
//In the example above, we use the space as the separator, divide a sentence into 4 words. If we specify the second parameters, it will be like this:
//var str="My name is John";
//var words1=str.split(" ",3);
//console.log("words1:",words1);
//var words2=str.split(" ",5);
//console.log("words2:",words2);
//
////output:
//words1:[ 'My', 'name', 'is' ]
//words2:[ 'My', 'name', 'is', 'John' ]
//
//When we specify the number of fewer than 4, the result will be a specified number of strings; if the number of the partition is too many, the results will only be the same as the default results. 
//If we use the empty string as the separator, we'll get an array of strings containing each character:
//var str="My name is John";
//var words=str.split("");
//console.log(words);
//
////output:
//[ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]
//
//Split can use regular expressions to split the string. But because we have not learned the use of regular expressions, so we do not have to learn this usage.
//concat() can merge many strings into a string like this:
//var str="My".concat("name","is","John");
//console.log(str);
//
////output:
//MynameisJohn
//
//In fact, we rarely see the actual use of concat(), because we have a more simple way. that is using the + operator:
//var str="My"+"name"+"is"+"John";
//console.log(str);
//
////output:
//MynameisJohn
//
//But even using the + operator, the four words are not the perfect combination of a sentence, because there is no space separator. What should we do? Using join() is the best choice.
//join() is the reverse operation of the split() method. We can see a lot of code in the actual use:
//var str="My name is John";
//var words=str.split(" ");
//console.log("use split():",words);
//var s=words.join(" ");
//console.log("use join():",s);
//console.log("use split() and join():",str.split(" ").join(" "))
////output:
//use split():[ 'My', 'name', 'is', 'John' ]
//use join():My name is John
//use split() and join():My name is John
//
//Ok, lesson is over. let's us do some task.
//Task
//Implement a function which accepts 2 arguments: string and separator.
//The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
//For example:
//splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
//splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
//splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
//splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
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

function splitAndMerge(string, separator) {
    let output = string.split(' ')
    output = output.map((string) => {
      return string.split('').join(separator)
    })
    return output.join(' ')
  }

//Grader
//
//Create a function that takes a number as an argument and returns a grade based on that number.
//
//
//
//Score
//Grade
//
//
//
//Anything greater than 1 or less than 0.6
//"F"
//
//
//0.9 or greater
//"A"
//
//
//0.8 or greater
//"B"
//
//
//0.7 or greater
//"C"
//
//
//0.6 or greater
//"D"
//
//
//Examples:
//grader(0)   should be "F"
//grader(1.1) should be "F"
//grader(0.9) should be "A"
//grader(0.8) should be "B"
//grader(0.7) should be "C"
//grader(0.6) should be "D"
//

function grader(score) {
    if (score > 1 || score < .6) return 'F'
    else if (score >= .9) return 'A'
    else if (score >= .8) return 'B'
    else if (score >= .7) return 'C'
    else if (score >= .6) return 'D'
  }

//Ensure question
//
//Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
//For example (Input --> Output)
//"Yes" --> "Yes?" 
//"No?" --> "No?"
//

function ensureQuestion(s) {
    return s[s.length - 1] === '?' ? s : s + '?'
  }

//Grasshopper - Bug Squashing
//
//Terminal game bug squashing
//You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.
//
//You are using a library that already has the functions below. Create a function named main that calls the functions in the proper order.
//- combat
//- buyHealth
//- getCoins
//- printStatus
//- rollDice
//- move
//
//- `combat`
//- `buy_health`
//- `get_coins`
//- `print_status`
//- `roll_dice`
//- `move`
//
//- `combat`
//- `buy_health`
//- `get_coins`
//- `print_status`
//- `roll_dice`
//- `move`
//
//- `Combat`
//- `BuyHealth`
//- `GetCoins`
//- `PrintStatus`
//- `RollDice`
//- `Move`
//

var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()  
  buyHealth()
  printStatus()
}

//Be Concise I - The Ternary Operator
//
//Be Concise I - The Ternary Operator
//You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:
//
//If the age is 12 or lower, it return "You're a(n) kid"
//If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
//If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
//If the age is 65 or above, it return "You're a(n) elderly"
//
//Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.
//I'll give you a few hints:
//
//The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
//Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;)  Perhaps we can shorten it?
//Write everything in one line, \n and other whitespaces counts.
//
//Whatever you do, do not change what the function does.  Good luck :)

describeAge = (age) => age <= 12 ? "You're a(n) kid" : age <=17 ? "You're a(n) teenager" : age <= 64 ? "You're a(n) adult" : "You're a(n) elderly"
