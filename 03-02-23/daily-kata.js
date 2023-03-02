//Basic Math (Add or Subtract)
//
//In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
//Note: the input will not be empty.
//Examples
//"1plus2plus3plus4"  --> "10"
//"1plus2plus3minus4" -->  "2"
//

function calculate(str) {
    //split by 'plus'
    str = str.split('plus')
    //within each element, split by 'minus'
    str = str.map(ele => {
      return !ele.includes('minus') ? ele :
             ele.split('minus').reduce((prev, num, index) => {
                if (index === 0) {
                    return prev + Number(num)
                } else {
                    return prev - Number(num)
                }
            }, 0)
    })
    //eval minus element
    //eval plus elements
    
    return String(str.reduce((prev, num) => prev + Number(num), 0))
  }
  calculate('1minus2minus3minus4')