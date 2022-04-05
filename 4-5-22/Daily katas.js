// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) return true
    return false
}

// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

function mouthSize(animal) {
    if (animal.toLowerCase() === 'alligator') return 'small'
    return 'wide'
  }

//   Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//   Examples
//   "hello"     -->  "hll"
//   "codewars"  -->  "cdwrs"
//   "goodbye"   -->  "gdby"
//   "HELLO"     -->  "HELLO"
//   don't worry about uppercase vowels
//   y is not considered a vowel for this kata

function shortcut (string) {
    let arrayOfVowels = ['a', 'e', 'i', 'o', 'u']
    let stringArray = string.split('')
    for (let i = 0; i < stringArray.length; i++) {
        if (arrayOfVowels.includes(stringArray[i])) {
            stringArray.splice(i, 1)
            i--
        }
    }
    return stringArray.join('')
  }

//   You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

function reverse(string){
    return string.split(' ').reverse().join(' ')
  }