// validate code with simple regex
// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

function validateCode (code) {
    return String(code)[0] === '1' || String(code)[0] === '2' || String(code)[0] === '3' ? true : false
}

// Regexp Basics - is it a digit?

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
String.prototype.digit = function() {
    return this <= '9' && this >= '0' && this.length == 1
};

// Template Strings
// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
}

// Polish alphabet
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters (string) {
    let keyObj = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z'
    }
    return string
        .split('')
        .map(x => {
            return x in keyObj ? keyObj[x] : x
        })
        .join('')
}

// ES6 string addition
// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.

function joinStrings(string1, string2){
    return `${string1} ${string2}`
}

// Character Frequency
// Description
// Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!

// Explanation
// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

// Example
// charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}

function charFreq(message) {
    return message
        .split('')
        .reduce((accumulatorObj, letter)  => {
            if (letter in accumulatorObj) {
                accumulatorObj[letter]++
                return accumulatorObj
            } else {
                accumulatorObj[letter] = 1
                return accumulatorObj
            }
        
        }, {})
}

// Simple Comparison?
// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

function add(a, b){
	return a == b ? true : false
}

// Crash Override
// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
// Happy hacking!
function aliasGen(first, sur){
    if (first[0].toUpperCase() in firstName && sur[0].toUpperCase() in surname) {
        return (firstName[first[0].toUpperCase()] + ' ' + surname[sur[0].toUpperCase()] )
    } else {return "Your name must start with a letter from A - Z."}
}

// Count words
// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

function countWords(str) {
    let keyArray = ["'", '-', '`', '&']
    let count = 0
    let inWord = false
    let strArray = str.split('')
    strArray = strArray.map(x => x.toLowerCase())
    for (let i = 0; i < strArray.length; i++) {
        if ((keyArray.includes(strArray[i]) || strArray[i] >= 'a' && strArray[i] <= 'z' || strArray[i] >= '0' && strArray[i] <= '9')) {
            inWord = true
        } else if (inWord === true){
            count++
            inWord = false
        }
    }
    if (inWord === true) count++ 
    return count
}

// Simple Change Machine
// Your task is to create a change machine.

// The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

// The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

// This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.

function changeMe(moneyIn){
    keyObj = {
        '£5': 500,
        '£2': 200,
        '£1': 100,
        '50p': 50,
        '20p': 20,
        '10p': 10,
    }
    if (!(moneyIn in keyObj)) {
        return moneyIn
    }
    let convertedMoney = keyObj[moneyIn]
    let outputArray = []
    if (convertedMoney === 20) {
        return '10p 10p'
    }
    while (convertedMoney !== 0) {
        if (convertedMoney > 10) {
            outputArray.push('20p')
            convertedMoney -= 20
        } else {
            outputArray.push('10p')
            convertedMoney -= 10
        }
    }
    return outputArray.join(' ')
}