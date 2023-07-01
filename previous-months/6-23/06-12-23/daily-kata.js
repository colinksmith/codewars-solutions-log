//Working with arrays I (and why your code fails in some katas)
//
//In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.
//Good luck!
//Hint: watch out for side effects.
//Some good reading: MDN Docs about arrays

function withoutLast(arr) {
    return arr.slice(0, -1);
  }