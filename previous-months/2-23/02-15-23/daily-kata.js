//ATM
//
//An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars.
//You can consider that there is a large enough supply of each of these banknotes.
//You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.
//Return that number, or -1 if it is impossible.
//Good Luck!!!

function solve(n) {
    if (n % 10 !== 0) {
      return -1
    }
    let output = 0
    let key = [500, 200, 100, 50, 20, 10]
    key.forEach(num => {
      if (n / num >= 1) {
        output += Math.floor(n / num)
        n = n % num
      }
    })
    return output
  }
  
  // p: num of dollars
  // r: num of bills
  // e: solve(770), 4
  // p: 
  // take dollars, divide by largest denomination
  //   add floor of quotient to output
  //   repeat