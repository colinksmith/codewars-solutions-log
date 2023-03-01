//Changing letters
//
//When provided with a String, capitalize all vowels
//For example:
//Input : "Hello World!"
//Output : "HEllO WOrld!"
//Note: Y is not a vowel in this kata.

function swap (string) {
    let key = 'aeiou'
    //split string to arr
    const output = string.split('')
    //map arr vowels to uppercase
        .map(letter => {
            if (key.includes(letter)) {
                return letter.toUpperCase()
            } else {
                return letter
            }
        })
    //join to return to string
        .join('')
    return output
}

//parameters: string - a word. No special characters. numbers. y is not a vowel

//returns: string with vowels capitalized. other characters are the same

//examples
// swap('Hello World!') //returns 'HEllO WOrld!'
// swap('123') //return '123'
//
