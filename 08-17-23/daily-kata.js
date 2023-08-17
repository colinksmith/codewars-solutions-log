//Eliminate the intruders! Bit manipulation
//
//Task
//You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's). 
//In practice, you should implement this function:
//long eliminate_unset_bits(const char* number);
//
//Examples
//eliminate_unset_bits("11010101010101") ->  255 (= 11111111)
//eliminate_unset_bits("111") ->  7
//eliminate_unset_bits("1000000") -> 1
//eliminate_unset_bits("000") -> 0
//

function eliminateUnsetBits(number) {
    number = number.toString()
      .split('')
      .filter(x => x === 1 || x === '1')
      .join('')
    return parseInt(number, 2) || 0
  }