//Fix My Phone Numbers!
//
//Fix My Phone Numbers
//Oh thank goodness you're here! The last intern has completely ruined everything! 
//All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!
//The Format
//Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.
//However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all! 
//For example, 
//'02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.
//The Task
//Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".
function isItANum(str) {
    let output = "Not a phone number"
    let arr = str.split('').filter(x => !isNaN(x) && x !== ' ')
    for (let i = 0; i <= arr.length - 11; i++) {
      if (arr[i] === '0' && arr.length - i === 11) {
        output = arr.slice(i).join('')
      }
    }
    return output
  }
  isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165")