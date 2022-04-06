// Capitalization and Mutability

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
    let newWord = word[0].toUpperCase() + word.slice(1)
    return newWord
  }

//   Alan Partridge II - Apple Turnover
//   As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

//   Lynn: Alan, there’s that teacher chap.
//   Alan: Michael, if he hits me, will you hit him first?
//   Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
//   Alan: Yeah, chicken stock.
//   Phil: Hello Alan.
//   Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
//   Lynn: What do you mean?
//   Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
//   Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.
  
//   Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.
  
//   X will be a valid integer number.
//   X will be either a number or a string. Both are valid.
  
//   Other katas in this series:
  
//   Alan Partridge I - Partridge Watch
//   Alan Partridge III - London
function apple(x){
    if (x ** 2 > 1000) return "It's hotter than the sun!!"
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

