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