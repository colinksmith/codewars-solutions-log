// Switch it Up!
// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){
    let key = {}
    key[0] = 'Zero'
    key[1] = 'One'
    key[2] = 'Two'
    key[3] = 'Three'
    key[4] = 'Four'
    key[5] = 'Five'
    key[6] = 'Six'
    key[7] = 'Seven'
    key[8] = 'Eight'
    key[9] = 'Nine'

    return number in key ? key[number] : false
}