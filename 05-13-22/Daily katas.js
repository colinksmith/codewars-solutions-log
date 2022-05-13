// Calculate Price Excluding VAT
// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1
function excludingVatPrice(price){
    if (price < 0 || (!price && price !== 0)) {
        return -1
    }
    let output = price / 1.15
    return Number(output.toFixed(2))
}
// Collatz Conjecture (3n+1)
// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
// #References

var hotpo = function(n){
    if(n == 0) return 0; //Optional Handler to n = 0
    let count = 0
    while (n !==1) {
        if (n % 2 === 0) {
            n = n / 2
            count++
        } else if (n % 2 === 1) {
            n = n * 3 + 1
            count++
        }
    }
    return count
}