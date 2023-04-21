//Scaling Squared Strings
//
//You are given a string of n lines, each substring being n characters long. 
//For example:
//s = "abcd\nefgh\nijkl\nmnop"
//We will study the "horizontal" and the "vertical" scaling of this square of strings.
//A k-horizontal scaling of a string consists of replicating k times each character of the string
//(except '\n').
//
//Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
//
//A v-vertical scaling of a string consists of replicating v times each part of the squared string.
//
//Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
//
//Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.
//Example: a = "abcd\nefgh\nijkl\nmnop"
//scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
//
//Printed:
//abcd   ----->   aabbccdd
//efgh            aabbccdd
//ijkl            aabbccdd
//mnop            eeffgghh
//                eeffgghh
//                eeffgghh
//                iijjkkll
//                iijjkkll
//                iijjkkll
//                mmnnoopp
//                mmnnoopp
//                mmnnoopp
//
//Task:
//
//Write function scale(strng, k, v) 
//k and v will be positive integers. If strng == "" return "".
//

function scale(strng, k, n) {
    if (!strng) return ''
    let strngs = strng.split('\n')
    strngs = strngs.map(word => {
      return word.split('').map(letter => letter.repeat(k)).join('')
    })
    for (let i = strngs.length - 1; i >= 0; i--) {
      let insertion = ''
      for (let j = 1; j < n; j++){
        insertion += `\n${strngs[i]}`
      }
      strngs[i] += insertion
    }
  return strngs.join('\n')
}