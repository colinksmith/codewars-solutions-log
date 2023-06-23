//Last
//
//Find the last element of the given argument(s).
//Examples
//last [1, 2, 3, 4]     -- =>  4
//last ['x', 'y', 'z']  -- => 'z'
//
//In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
//(courtesy of haskell.org)

function last(list){
    let last = arguments[arguments.length - 1]
    return last.length ? last[last.length - 1] : last
  }
  