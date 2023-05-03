//Fizz Buzz
//
//Return an array containing the numbers from 1 to N, where N is the parametered value.
//Replace certain values however if any of the following conditions are met:
//
//If the value is a multiple of 3: use the value "Fizz" instead
//If the value is a multiple of 5: use the value "Buzz" instead
//If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
//
//N will never be less than 1.
//Method calling example:
//fizzbuzz(3) -->  [1, 2, "Fizz"]
//

function fizzbuzz(n){
    let output = []
    for (let i = 1; i <= n; i++){
      if (i % 5 === 0 && i % 3 === 0){
        output.push('FizzBuzz')
      } else if (i % 5 === 0){
        output.push('Buzz')
      } else if (i % 3 === 0){
        output.push('Fizz')
      } else {
        output.push(i)
      }
    }
    return output
  }
  