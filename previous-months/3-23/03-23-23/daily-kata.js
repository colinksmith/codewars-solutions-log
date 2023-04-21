//Unscrambled eggs
//
//Unscramble the eggs.
//The string given to your function has had an "egg" inserted directly after each consonant.  You need to return the string before it became eggcoded.
//Example
//unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
////             "B---eg---in---n---er---"
//
//Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.

function unscrambleEggs(word){
    const consonants = 'bcdfghjklmnpqrstvwxyz'
    let output = ''
    for (let i = 0; i < word.length; i++){
      output += word[i]
      if (consonants.includes(word[i].toLowerCase())){
        i += 3
      }
    }
    return output
  }