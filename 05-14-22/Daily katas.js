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