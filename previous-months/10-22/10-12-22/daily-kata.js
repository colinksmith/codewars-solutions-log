//Greet Me
//
//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
//Example:
//"riley" --> "Hello Riley!"
//"JACK"  --> "Hello Jack!"
//

var greet = function(name) {
    name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
    return `Hello ${name}!`
  };