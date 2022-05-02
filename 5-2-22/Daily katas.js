// Stringy Strings
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.
function stringy(size) {
    let accumulator = ''
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            accumulator += '1'
        } else if (i % 2 === 1) {
            accumulator += '0'
        }
    }
    return accumulator
}

// Dollars and Cents
// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

function formatMoney(amount){
    amount = String(amount)
    if (amount.includes('.')) {
        let amounts = amount.split('.')
        amounts[1] = amounts[1].padEnd(2, 0)
        return `$${amounts.join('.')}`
    } else {
        return `$${amount}.00`
    }
}