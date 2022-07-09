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