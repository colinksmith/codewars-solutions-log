//Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
//
//Description:
// Count the number of exclamation marks and question marks, return the product.
//Examples
//Product("") == 0
//product("!") == 0
//Product("!ab? ?") == 2
//Product("!!") == 0
//Product("!??") == 2
//Product("!???") == 3
//Product("!!!??") == 6
//Product("!!!???") == 9
//Product("!???!!") == 9
//Product("!????!!!?") == 20
//

function product (string) {
    let sums = string.split('').reduce((prev, curr) => {
      if (curr === '!') {
        prev[0] += 1
      } else if (curr === '?'){
        prev[1] += 1
      } 
      return prev
    }, [0, 0])
    return sums[0] * sums[1]
  }