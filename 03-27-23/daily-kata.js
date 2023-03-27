//Regexp Basics - is it a letter?
//
//Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

String.prototype.isLetter = function() {
    if (this.length !== 1) return false
    return this.toUpperCase() !== this.toLowerCase() ? true : false
  }