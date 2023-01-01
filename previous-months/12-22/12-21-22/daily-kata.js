//esreveR
//
//Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
//(the dedicated builtin(s) functionalities are deactivated)

reverse = function(array) {
    let output = []
    array.forEach(ele => output.unshift(ele))
    return output
  }