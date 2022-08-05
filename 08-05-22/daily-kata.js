//Isograms
//
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//Example: (Input --> Output)
//"Dermatoglyphics" --> true
//"aba" --> false
//"moOse" --> false (ignore letter case)
//

function isIsogram(str){
    str === "" ? true :
      str = str.split('').map(x => x.toLowerCase() || x)
      for (let i = str.length - 1; i >= 0; i--){
        let indexVal = str[i]
        if (!(i === str.indexOf(indexVal))){
          return false
        }
      }
      return true
    }