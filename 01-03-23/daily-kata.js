//Move 10
//
//Move every letter in the provided string forward 10 letters through the alphabet.
//If it goes past 'z', start again at 'a'.
//Input will be a string with length > 0.

function moveTen(s){
  const key = 'abcdefghijklmnopqrstuvwxyz'
  return s
    .split('')
    .map(letter => {
      return key[key.indexOf(letter) + 10 ] || key[key.indexOf(letter) - 16]
    })
    .join('')
}

moveTen("testcase")