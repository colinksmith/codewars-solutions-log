//Remove All The Marked Elements of a List
//
//Define a method/function that removes from a given array of integers all the values contained in a second array.
//Examples (input -> output):
//* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
//* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
//* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
//
//Enjoy it!!

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(ele => {
      if (values_list.includes(ele)){
        return false
      } else {
        return true
      }
    })
  }

//Array.diff
//
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
//arrayDiff([1,2],[1]) == [2]
//
//If a value is present in b, all of its occurrences must be removed from the other:
//arrayDiff([1,2,2,2,3],[2]) == [1,3]
//

function arrayDiff(a, b) {
    return a.filter(ele => {
    if (b.includes(ele)){
      return false
    } else {
      return true
    }
  })
}

//Primes in numbers
//
//Given a positive number n > 1 find the prime factor decomposition of n.
//The result will be a string with the following form :
// "(p1**n1)(p2**n2)...(pk**nk)"
//
//with the p(i) in increasing order and n(i) empty if
//n(i) is 1.
//Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
//
// p: number
// r: primes as string
// e: 86240 should return "(2**5)(5)(7**2)(11)"
// p:
// take number, divide by lowest prime, 
//   add that prime to a list
// stop when running number is prime
//   add that prime to a list
// return list
  
function primeFactors(n){
    let factors = []
    let outputArr = []
    let outputFormatted = ''
    let nextFactor = findNextFactor(n)
    while (nextFactor !== 1){
      factors.push(nextFactor)
      n /= nextFactor
      nextFactor = findNextFactor(n)
    }
    let count = factors.reduce((prev, curr) => {
      if (prev[String(curr)]){
        prev[String(curr)]++
      } else {
        prev[String(curr)] = 1
      }
      
      return prev
    }, {})
    for (num in count) {
      if (count[num] > 1) {
        outputArr.push(`${num}**${count[num]}`)
      } else {
        outputArr.push(`${num}`)
      }
    }
    outputArr.forEach(ele => {
      outputFormatted += `(${ele})`
    })
    return outputFormatted
  }
  function findNextFactor(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
      if (num % i === 0){
        return i
      }
    }
    return num
  }
  
