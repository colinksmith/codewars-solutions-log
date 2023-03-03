//Reverse the bits in an integer
//
//Write a function that reverses the bits in an integer.
//For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
//You can assume that the number is not negative.

//parameters: a number
//return: a number
//examples:

//reverseBits(417), 267

function reverseBits (n) {
    let reversedBinary =  n
        .toString(2)
        .split('')
        .reverse()
        .join('')
    return parseInt(reversedBinary, 2)
}
reverseBits(417)