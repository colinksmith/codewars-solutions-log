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