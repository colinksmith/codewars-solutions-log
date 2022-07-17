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