//For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
//
//This is a beginner friendly kata especially for UFC/MMA fans. 
//It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!
//If the winner is George Saint Pierre he will obviously say:
//
//"I am not impressed by your performance."
//
//If the winner is Conor McGregor he will most undoubtedly say:
//
//"I'd like to take this chance to apologize.. To absolutely NOBODY!"
//
//Good Luck! 
//Note
//The given name may varies in casing, eg., it can be "George Saint Pierre" or "geOrGe saiNT pieRRE". Your solution should treat both as the same thing (case-insensitive).

var quote = function(fighter) {
    fighter = fighter.toLowerCase()
    return fighter === 'george saint pierre' ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!" 
  };

//Thinkful - Number Drills: Blue and red marbles
//
//You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:
//You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.
//You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
//
//the number of blue marbles you put in the bag to start
//the number of red marbles you put in the bag to start
//the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
//the number of red marbles pulled out so far (always lower than the starting number of red marbles)
//
//guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const currentBlue = blueStart - bluePulled
    const currentRed = redStart - redPulled
    return currentBlue / (currentBlue + currentRed)
  }

//Parse float
//
//Write function parseFloat which takes an input and returns a number or Nothing if conversion is not possible.

function parseF(s) {
    return parseFloat(s) === 0 ? 0 : parseFloat(s) || null
  }

//Compare within margin
//
//Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b. 
//a is considered "close to" b if margin is greater than or equal to the distance between a and b.
//Please note the following:
//
//When a is close to b, return 0.
//
//Otherwise...
//
//When a is less than b, return -1.
//
//When a is greater than b, return 1.
//
//
//If margin is not given, treat it as zero.
//Assume: margin >= 0
//Tip: Some languages have a way to make parameters optional.
//
//Example 1
//If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.
//This is because a and b are no more than 3 numbers apart.
//Example 2
//If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1. 
//This is because the distance between a and b is greater than 0, and a is less than b.

function closeCompare(a, b, margin = 0){
    let difference = Math.abs(a - b)
    return margin >= difference ? 0 : a > b ? 1 : -1
  }
  

//Grasshopper - Order of operations
//
//Grasshopper Order of Operations
//You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

function orderOperations () {
    return (2 + 2) * (2 + 2) * 2
  }

//ASCII Total
//
//You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
//examples:
//uniTotal("a") == 97
//uniTotal("aaa") == 291

function uniTotal (string) {
    let sum = 0
    string.split('').forEach(letter => {
      sum += letter.charCodeAt()
    })
    return sum
  }

//Power
//
//The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
//Examples
//numberToPower(3,2)  // -> 9 ( = 3 * 3 )
//numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
//numberToPower(10,6) // -> 1000000
//
//Note: Math.pow and some other Math functions like eval() and ** are disabled.

function numberToPower(number, power){
    if (power === 0){
      return 1
    }
    let num = number
    for(let i = 1; i < power; i++){
      num *= number
    }
    return num
  }

//Name on billboard
//
//You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
//You can not use multiplier "*" operator.
//If your name would be Jeong-Ho Aristotelis, ad would cost £600.
//20 leters * 30 = 600 (Space counts as a letter).

function billboard(name, price = 30){
    let sum = 0
    for (let i = 1; i <= name.length; i++) {
      sum += price
    }
    return sum
  } 

//Training JS #11: loop statement --break,continue
//
//We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:
//function findFirstOddNumber(arr){
//  var result;
//  for (var i=0;i<arr.length;i++){
//    if (arr[i]%2==1){
//      result=arr[i];
//      break;
//    }
//  }
//  return result;
//}
//
//In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.
//In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:
//function dontDisplayNegative(arr){
//  for (var i=0;i<arr.length;i++){
//    if (arr[i]<0) continue;   
//    console.log(arr[i])
//  }
//}
//
//In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.
//Through the use of break and continue, you can make the loop statement more flexible and convenient.
//Ok, lesson is over. let's us do some task with break and continue.
//Task
//Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
//You need traverse dolls by using for loop. If element is  "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it. 
//When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element. 
//Return the bag after for loop finished.
//You should use for, break and continue in your code. otherwise, your solution may not pass this kata.
//If you forgot how to push an element to array, please refer to lesson 4.
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

function grabDoll(dolls){
    var bag=[];
    //coding here
    for(let i = 0; i < dolls.length; i++) {
      if (bag.length === 3){
        break
      }
      if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll'){
        bag.push(dolls[i])
      }
      continue
    }
    return bag;
  }