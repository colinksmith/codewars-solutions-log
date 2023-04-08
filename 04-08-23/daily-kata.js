//Even or Odd - Which is Greater?
//
//Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
//
//If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
//
//If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
//
//If the total of both even and odd numbers are identical return: "Even and Odd are the same"
//
//

function evenOrOdd(str) {
    let oddSum = 0,
        evenSum = 0,
        output = ''
    str.split('').forEach(num => {
      num = Number(num)
      if (num % 2 !== 0) {
        oddSum += num
      } else if (num % 2 === 0) {
        evenSum += num
      }
    })
    if (oddSum > evenSum) {
      output = "Odd is greater than Even"
    } else if (oddSum < evenSum) {
      output = "Even is greater than Odd"
    } else {
      output = "Even and Odd are the same"
    }
    return output
  }