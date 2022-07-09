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