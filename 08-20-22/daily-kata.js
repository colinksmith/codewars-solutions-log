//Count the Digit
//
//Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. 
//Square all numbers k (0 <= k <= n) between 0 and n. 
//Count the numbers of digits d used in the writing of all the k**2. 
//Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
//Examples:
//n = 10, d = 1 
//the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
//We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
//
//nb_dig(25, 1) returns 11 since
//the k*k that contain the digit 1 are:
//1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
//So there are 11 digits 1 for the squares of numbers between 0 and 25.
//
//Note that 121 has twice the digit 1.

//p n >= 0, 0 <= d <= 9, 
//r int, number of digits ( d ) in k
//e 10, 4
//p take n, map (x => x ** 2), reduce to how many of the digit d

function nbDig(n, d) {
    let numbers = []
    for (let i = 0; i <= n; i++){
      numbers.push(i)
    }
    let numbersSquared = numbers
        .map(x => x ** 2)
    return numbersSquared
        .reduce((prev, curr) => {
            let currString = String(curr)
            let digit = 0
            for (let i = 0; i < currString.length; i++) {
                if (currString[i] === String(d)){
                digit++
                }
            }
            return prev + digit
        },0)
  }