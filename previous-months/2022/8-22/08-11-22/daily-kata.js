//Beginner Series #3 Sum of Numbers
//
//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//Note: a and b are not ordered!
//Examples (a, b) --> output (explanation)
//(1, 0) --> 1 (1 + 0 = 1)
//(1, 2) --> 3 (1 + 2 = 3)
//(0, 1) --> 1 (0 + 1 = 1)
//(1, 1) --> 1 (1 since both are same)
//(-1, 0) --> -1 (-1 + 0 = -1)
//(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//

function getSum( a,b ){
    let min, max, output = 0
    if (a > b) min = b, max = a
    else if (b > a) min = a, max = b
    else return a
    for(let i = min; i <= max; i++){
      output += i
    }
  return output
}

//Two to One
//
//Take 2 strings s1 and s2 including only letters from a to z.
//Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//Examples:
//a = "xyaabbbccccdefww"
//b = "xxxxyyyyabklmopq"
//longest(a, b) -> "abcdefklmopqwxy"
//
//a = "abcdefghijklmnopqrstuvwxyz"
//longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
//

function longest(s1, s2) {
    newS = new Set([...s1, ...s2])
    return Array.from(newS).sort().join('')
  }