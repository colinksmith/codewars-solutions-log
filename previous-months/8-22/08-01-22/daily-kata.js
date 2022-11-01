//Descending Order
//
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//Examples:
//Input: 42145
//Output: 54421
//Input: 145263
//Output: 654321
//Input: 123456789
//Output: 987654321

function descendingOrder(n){
    return Number(String(n).split('').sort((a, b) => b - a).join(''))
  }

//Mumbling
//
//This time no story, no theory. The examples below show you how to write function accum:
//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//
//The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let output = []
  s = s.split('').map(x => x.toLowerCase())
  for (let i = 0; i < s.length; i++){
    output.push(`${s[i].toUpperCase()}${s[i].repeat(i)}`)
  }
  return output.join('-')
}