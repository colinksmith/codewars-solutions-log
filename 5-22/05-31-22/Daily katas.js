// Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    if (x.split('').reverse().join('').toLowerCase() === x.toLowerCase())return true 
    else return false
}