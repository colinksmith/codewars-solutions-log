//String Merge!
//
//Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
//Examples
//("hello", "world", "l")       ==>  "held"
//("coding", "anywhere", "n")   ==>  "codinywhere"
//("jason", "samson", "s")      ==>  "jasamson"
//("wonderful", "people", "e")  ==>  "wondeople"
//

function stringMerge(string1, string2, letter){
// slice string1 until given letter
  let prefix = string1.slice(0, string1.indexOf(letter))
// slice string2 after given letter
  let suffix = string2.slice(string2.indexOf(letter))
// combine and return strings
  return prefix + suffix
}

// p: 2 strings and a letter (str)
// r: string 1 word
// e: ("hello", "world", "l")       ==>  "held"
// p:
// slice string1 until given letter
// slice string2 after given letter
// combine and return strings