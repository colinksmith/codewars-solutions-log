//Regexp Basics - is it a vowel?
//
//Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.

String.prototype.vowel = function() {
    const key = ['a','e','i','o','u']
    const a = this.toLowerCase()
    if (key.includes(a)){
      return true
    } else {
      return false
    }
  };