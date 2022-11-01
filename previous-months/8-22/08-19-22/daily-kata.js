//Money, Money, Money
//
//Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
//The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
//Note to Tax: not the invested principal is taxed, but only the year's accrued interest
//Example:
//  Let P be the Principal = 1000.00      
//  Let I be the Interest Rate = 0.05      
//  Let T be the Tax Rate = 0.18      
//  Let D be the Desired Sum = 1100.00
//
//
//After 1st Year -->
//  P = 1041.00
//After 2nd Year -->
//  P = 1083.86
//After 3rd Year -->
//  P = 1128.30
//
//Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
//Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.  
//Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
    let year = 0
    while (principal < desired){
      principal += principal * interest * (1 - tax)
      year++
    }
    return year
}

//Count the divisors of a number
//
//Count the number of divisors of a positive integer n.
//Random tests go up to n = 500000.
//Examples (input --> output)
//4 --> 3 (1, 2, 4)
//5 --> 2 (1, 5)
//12 --> 6 (1, 2, 3, 4, 6, 12)
//30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
//

function getDivisorsCnt(n){
    const root = Math.sqrt(n)
    let factors = []
    for (let i = 1; i <= root; i++) {
      if ((n / i ) % 1 === 0){
        factors.push(i)
        factors.push(n / i )
      }
    }
    let output = new Set(factors)
    return output.size
}