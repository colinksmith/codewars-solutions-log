//Barking mad
//
//Teach snoopy and scooby doo how to bark using object methods. 
//Currently only snoopy can bark and not scooby doo. 
//snoopy.bark(); // return "Woof"
//scoobydoo.bark(); // undefined
//
//snoopy.bark() #return "Woof"
//scoobydoo.bark() #undefined
//
//snoopy.bark() #return "Woof"
//scoobydoo.bark() #doesn't work yet
//
//Use method prototypes to enable all Dogs to bark. 

function Dog (breed) {
    this.breed = breed;
  }
  
  var snoopy = new Dog("Beagle");
  
  var scoobydoo = new Dog("Great Dane");
  Dog.prototype.bark = function() {
    return 'Woof'
  }

//Is integer safe to use?
//
//Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.
//SafeInteger(9007199254740990) //true
//SafeInteger(-90) //true
//SafeInteger(9007199254740992) //false
//

function SafeInteger(n) {
    return n < 9007199254740992 ? true : false
  }

//Did she say hallo?
//
//You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
//Write a simple function to check if the string contains the word hallo in different languages.
//These are the languages of the possible people you met the night before:
//
//hello - english
//ciao - italian
//salut - french
//hallo - german
//hola - spanish
//ahoj - czech republic
//czesc - polish
//
//Notes
//
//you can assume the input is a string.
//to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
//function should be case insensitive to pass the tests
//

function validateHello(greetings) {
    const helloKey = {
      hello: 'english',
      ciao : 'italian',
      salut : 'french',
      hallo : 'german',
      hola : 'spanish',
      ahoj: 'czech republic',
      czesc : 'polish',
    }
    for (const word in helloKey){
      if (greetings.toLowerCase().includes(word)){
        return true
      }
    }
    return false
  }

//8kyu interpreters: HQ9+
//
//You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:
//
//If the input is 'H', return 'Hello World!'
//If the input is 'Q', return the input
//If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
//
//99 bottles of beer on the wall, 99 bottles of beer.
//Take one down and pass it around, 98 bottles of beer on the wall.
//98 bottles of beer on the wall, 98 bottles of beer.
//Take one down and pass it around, 97 bottles of beer on the wall.
//97 bottles of beer on the wall, 97 bottles of beer.
//Take one down and pass it around, 96 bottles of beer on the wall.
//...
//...
//...
//2 bottles of beer on the wall, 2 bottles of beer.
//Take one down and pass it around, 1 bottle of beer on the wall.
//1 bottle of beer on the wall, 1 bottle of beer.
//Take one down and pass it around, no more bottles of beer on the wall.
//No more bottles of beer on the wall, no more bottles of beer.
//Go to the store and buy some more, 99 bottles of beer on the wall.
//
//
//For everything else, don't return anything (return null in C#, None in Rust).
//
//(+ has no visible effects so we can safely ignore it.)

function HQ9(code) {
    switch (code) {
      case 'H':
        return 'Hello World!'
        break
      case 'Q':
        return code
        break
      case '9':
        return ninetyNine()
        break
      default:
  }
}
function ninetyNine() {
    let lyrics = ''
    for (let i = 99; i >= 0; i--){
        switch(i){
            case 99:
                lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.`
                break
            case 2:
                lyrics += `\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.`
                break
            case 1:
                lyrics += `\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.`
                break
            case 0:
                lyrics += `\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
                break
            default:
                lyrics += `\n${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.`
                break
                
        }
    }
    return lyrics
}
