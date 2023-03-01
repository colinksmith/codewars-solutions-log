//Sum of integers in string
//
//Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
//Note: only positive integers will be tested.

function sumOfIntegersInString(s){
    const ints = '1234567890'
    let output = []
    let lastVal = 'str'
    s = s.split('')
         .forEach(letter => {
            if (ints.includes(letter)) {
              if (lastVal === 'str') {
                lastVal = ''
              }
              lastVal += letter
            } else if (!ints.includes(letter)) {
                if (lastVal !== 'str') {
                    output.push(lastVal)
                    lastVal = 'str'
                }
            }
         })
    if (lastVal !== 'str') {
        output.push(lastVal)
    }
    return output.reduce((prev, curr) => {
      return prev + Number(curr)
    }, 0)
  }
  
  console.log(sumOfIntegersInString("12.4"))
  
  //parameters
  //string with ints and letters
  
  //returns
  //sum of integers in string
  
  //examples
  //The30quick20brown10f0x1203jumps914ov3r1349the102l4zy return 3635
  
  //pseudocode
  //divide string into integers and letters
  //  string.split('')
  //  forEach(letter) {
  //    if (typeof === num) {
  //      add to running total
  //    } else (typeof === str) {
  //      if running total !== "str" {
  //        add str to running total
  //      }
  //    }
  //  }
  //sum and return integers