//shorter concat [reverse longer]
//
//Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
//In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
//Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).If a and b have the same length treat a as the longer producing b+reverse(a)+b

function shorter_reverse_longer(a,b){
    console.log(a, b)
    let shorter, longer
    if (a.length < b.length) {
      shorter = a
      longer = b
    } else {
      shorter = b
      longer = a
    }
    let reverse = longer.split('').reverse().join('')
    return `${shorter}${reverse}${shorter}`
  }