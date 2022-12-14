//Bingo ( Or Not )
//
//For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
//Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

function bingo(a) {
    console.log(a)
    if (!a.includes(2)) return 'LOSE'
    if (!a.includes(9)) return 'LOSE'
    if (!a.includes(7)) return 'LOSE'
    if (!a.includes(14)) return 'LOSE'
    if (!a.includes(15)) return 'LOSE'
    return 'WIN'
  }