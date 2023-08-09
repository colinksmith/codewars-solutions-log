//Find the index of the second occurrence of a letter in a string
//
//In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.
//Examples:
//second_symbol('Hello world!!!','l') --> 3
//second_symbol('Hello world!!!', 'A') --> -1
//
//Good luck ;) And don't forget to rate this Kata if you liked it.

function secondSymbol(s, symbol) {
    let first = s.indexOf(symbol)
    let output = s.indexOf(symbol, first + 1)
    return output
  }