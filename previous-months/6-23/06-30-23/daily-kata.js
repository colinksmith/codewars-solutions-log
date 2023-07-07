//Get key/value pairs as arrays
//
//Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.  
//Example:
//keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
//
//Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for  objects that extend their prototype?  

function keysAndValues(data){
    let keys = []
    let vals = []
    for (let key in data) {
      keys.push(key)
      vals.push(data[key])
    }
    return [keys, vals]
  }