// Capitalization and Mutability

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
    let newWord = word[0].toUpperCase() + word.slice(1)
    return newWord
  }

//   Alan Partridge II - Apple Turnover
//   As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

//   Lynn: Alan, there’s that teacher chap.
//   Alan: Michael, if he hits me, will you hit him first?
//   Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
//   Alan: Yeah, chicken stock.
//   Phil: Hello Alan.
//   Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
//   Lynn: What do you mean?
//   Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
//   Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.
  
//   Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
  
//   X will be a valid integer number.
//   X will be either a number or a string. Both are valid.
  
//   Other katas in this series:
  
//   Alan Partridge I - Partridge Watch
//   Alan Partridge III - London
function apple(x){
    if (x ** 2 > 1000) return "It's hotter than the sun!!"
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

// L1: Bartender, drinks!
// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param){
    param = param.toLowerCase()
    switch(param) {
        case "jabroni": 
          return "Patron Tequila"
          break
        case "school counselor": 
          return "Anything with Alcohol"
          break
        case "programmer": 
          return "Hipster Craft Beer"
          break
        case "bike gang member": 
          return "Moonshine"
          break
        case "politician": 
          return "Your tax dollars"
          break
        case "rapper": 
          return "Cristal"
          break
        default: return "Beer"
    }
  }

//   Name Shuffler
//   Write a function that returns a string in which firstname is swapped with last name.

//   nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }

//   Palindrome strings
//   A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
  
//   Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
  
//   Examples
//   isPalindrome("anna")   ==> true
//   isPalindrome("walter") ==> false
//   isPalindrome(12321)    ==> true
//   isPalindrome(123456)   ==> false

function isPalindrome(line) {
    line = String(line)
    let reverse = line.split('').reverse().join('')
    if (line === reverse) return true
    return false
}

// Regex count lowercase letters
// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz

function lowercaseCount(str){
    let arrayOfLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let count = 0
    for (i = 0; i < str.length; i++) {
        if (arrayOfLetters.includes(str[i])) {
            count++
        }
    }
    return count
}