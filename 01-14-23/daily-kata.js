//Simple string characters
//
//In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
//Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
//--the order is: uppercase letters, lowercase, numbers and special characters.
//
//More examples in the test cases. 
//Good luck!

function solve(s){
    const special = '[`!@#$%^&*()_+-=[]{};\':"\\|,.<>/?~]/'
    return s
      .split('')
      .reduce((prev, curr, index, arr) => {
    if (special.includes(curr)){
        prev[3]++
    } else if (Number(curr) || curr === '0') {
        prev[2]++
    } else if (curr.toLowerCase() === curr) {
        prev[1]++   
    } else if (curr.toUpperCase() === curr) {
        prev[0]++
    }
      return prev
    }, [0, 0, 0, 0])
  }
