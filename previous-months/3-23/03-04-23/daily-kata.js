//Say hello!
//
//Say hello!
//Write a function to greet a person. Function will take name as input and greet the person by saying hello.
//Return null/nil/None if input is empty string or null/nil/None.
//Example: 
//greet("Niks") == "hello Niks!"
//greet("") == nil; # Return nil if input is empty string
//greet(nil) == nil; # Return nil if input is nil
//

function greet(name) {
    if (name) {
      return `hello ${name}`
    } else {
      return null
    }
  }