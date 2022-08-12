//Credit Card Mask
//
//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//Your task is to write a function maskify, which changes all but the last four characters into '#'.
//Examples
//"4556364607935616" --> "############5616"
//     "64607935616" -->      "#######5616"
//               "1" -->                "1"
//                "" -->                 ""
//
//// "What was the name of your first pet?"
//
//"Skippy" --> "##ippy"
//
//"Nananananananananananananananana Batman!"
//-->
//"####################################man!"
//

function maskify(cc) {
    const minHashes = Math.max(cc.length - 4, 0)
    const last4 = cc.slice(minHashes)
    return '#'.repeat(minHashes) + last4
  }
  

//Friend or Foe?
//
//Make a program that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//i.e.
//friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
//
//Note: keep the original order of the names in the output.

function friend(friends){
    return friends.filter(x => x.length === 4)
  }

//Growth of a Population
//
//In a small town the population is p0 = 1000 at the beginning of a year. The population
//regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
//How many years does the town need to see its population
//greater or equal to p = 1200 inhabitants?
//At the end of the first year there will be: 
//1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//
//At the end of the 2nd year there will be: 
//1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
//
//At the end of the 3rd year there will be:
//1141 + 1141 * 0.02 + 50 => 1213
//
//It will need 3 entire years.
//
//More generally given parameters:
//p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
//the function nb_year should return n number of entire years needed to get a population greater or equal to p.
//aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
//Examples:
//nb_year(1500, 5, 100, 5000) -> 15
//nb_year(1500000, 2.5, 10000, 2000000) -> 10
//
//Note:
//Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nbYear(p0, percent, aug, p) {
    let count = 0
    while (p0 < p) {
      p0 += Math.floor(p0 * (percent / 100) + aug)
      count++
    }
    return count
  }

//Categorize New Member
//
//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//Input
//Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//Output
//Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
//Example
//input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
//

function openOrSenior(data){
    return data.map(x => {
      return x[0] >= 55 && x[1] > 7 ? 'Senior' : 'Open' 
    })
  }

//Find the next perfect square!
//
//You might know some pretty large perfect squares. But what about the NEXT one?
//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.  
//If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
//Examples:(Input --> Output)
//121 --> 144
//625 --> 676
//114 --> -1 since 114 is not a perfect square
//

function findNextSquare(sq) {
    let baseNum = Math.sqrt(sq)
    return baseNum % 1 !== 0 ? -1 :
    (baseNum + 1) ** 2
  }

//Printer Errors
//
//In a factory a printer prints labels for boxes. For one kind of boxes
//the printer has to use colors which, for the sake of simplicity,
//are named with letters from a to m. 
//The colors used by the printer are
//recorded in a control string. For example a "good" control string would be
//aaabbbbhaijjjm meaning that the printer used three times color a, four times
//color b, one time color h then one time color a...
//Sometimes there are problems: lack of colors, technical malfunction and a "bad" 
//control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//You have to write a function printer_error which given a string will return
//the error rate of the printer as a string representing a rational whose numerator 
//is the number of errors and the denominator the length of the control string.
//Don't reduce this fraction to a simpler expression.
//The string has a length greater or equal to one and contains only letters 
//from ato z.
//Examples:
//s="aaabbbbhaijjjm"
//printer_error(s) => "0/14"
//
//s="aaaxbbbbyyhwawiwjjjwwm"
//printer_error(s) => "8/22"
//

function printerError(s) {
    const total = s.length
    const key = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
    let printCount = s.split('').filter(x => key.includes(x)).length
    let errorCount = total - printCount
    return `${errorCount}/${total}`
}

//Regex validate PIN code
//
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. 
//If the function is passed a valid PIN string, return true, else return false.
//Examples (Input --> Output)
//"1234"   -->  true
//"12345"  -->  false
//"a234"   -->  false
//

function validatePIN (pin) {
    if (pin.includes('.') ||
        pin.includes('-') ||
        pin.includes('+')){
      return false
    } else if (pin.trim() !== pin){
      return false    
    } else if (parseInt(pin) != Number(pin) || pin < 0){
      return false
    } else if (!(pin.length === 4 || pin.length === 6)){
      return false
    } else {
      return true
    }
  }

//Binary Addition
//
//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//The binary number returned should be a string.
//Examples:(Input1, Input2 --> Output (explanation)))
//1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
//

function addBinary(a,b) {
    const sum = a + b
    return sum.toString(2)
}