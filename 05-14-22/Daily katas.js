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