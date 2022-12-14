//Number Of Occurrences
//
//Write a function that returns the number of occurrences of an element in an array.
//Examples
//var arr = [0, 1, 2, 2, 3];
//arr.numberOfOccurrences(0) === 1;
//arr.numberOfOccurrences(4) === 0;
//arr.numberOfOccurrences(2) === 2;
//arr.numberOfOccurrences("a") === 0;
//

Array.prototype.numberOfOccurrences = function(target) {
    let count = 0
    this.forEach( ele => {
      if (ele === target) count++ 
    })
    return count
  }