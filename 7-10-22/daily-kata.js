//Freudian translator 
//
//You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...
//In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. 
//Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.
//Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex. 
//In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.

function toFreud(string) {
    if (string === '') return ''
    return string.split(' ').map(() => 'sex').join(' ')
  }

//Find the Integral
//
//Create a function that finds the integral of the expression passed.
//In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
//For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
//Notes:
//
//The output should be a string.
//The coefficient and exponent is always a positive integer.
//
//Examples
// 3, 2  -->  "1x^3"
//12, 5  -->  "2x^6"
//20, 1  -->  "10x^2"
//40, 3  -->  "10x^4"
//90, 2  -->  "30x^3"
//

function integrate(coefficient, exponent) {
    let returnCoefficient = coefficient / (exponent + 1)
    return `${returnCoefficient}x^${exponent + 1}`
}

//Check same case
//
//Write a function that will check if two given characters are the same case.
//
//If either of the characters is not a letter, return -1
//If both characters are the same case, return 1
//If both characters are letters, but not the same case, return 0
//
//Examples
//'a' and 'g' returns 1
//'A' and 'C' returns 1
//'b' and 'G' returns 0
//'B' and 'g' returns 0
//'0' and '?' returns -1

function sameCase(a, b){
    function isLetter(c) {
      return c.toLowerCase() != c.toUpperCase();
    }
    if(!isLetter(a) || !isLetter(b)) return -1
    
    let aUpperCase, bUpperCase
    a === a.toUpperCase() ? aUpperCase = true : aUpperCase = false
    b === b.toUpperCase() ? bUpperCase = true : bUpperCase = false
    return aUpperCase === bUpperCase ? 1 : 0
  }

//Training JS #9: loop statement --while and do..while
//
//If you want your code to do a lot of similar work, a loop statement is a good choice. For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this:
//function sum1_10(){
//  return 1+2+3+4+5+6+7+8+9+10;
//}
//
//sum1_10=()->
//  return 1+2+3+4+5+6+7+8+9+10;
//
//Wow~~,looks very cool!
//But if we need to calculate the cumulative value from 1 to 100, the code becomes:
//function sum1_100(){
//  return 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25
//  +26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50
//  +51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75
//  +76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100;
//}
//
//sum1_100=()->
//  return 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25
//  +26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50
//  +51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75
//  +76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100;
//
//Do you feel a bit tired? We can use a loop statement do it:
//function sum1_100(){
//  var sum=0,num=1;    //Initialize two variables sum and num
//  while (num<=100){   //Determine the expression in brackets, while true, 
//                      //run the code block one time, while false, break the loop
//    sum=sum+num;      //Each time num will be added to the current value of sum
//                      //It can be simplified as:  sum+=num
//    num=num+1;        //Each time the value of num increases by 1
//                      //It can be simplified as:  num++
//  }
//  return sum;         //return the final cumulative value
//}
//
//sum1_100=()->
//  var sum=0,num=1;    //Initialize two variables sum and num
//  sum and num
//  while (num<=100)   //Determine the expression in brackets, while true, 
//                      //run the code block one time, while false, break the loop
//    sum=sum+num;      //Each time sum will add the current value of the num
//                      //It can be simplified as:  sum+=num
//    num=num+1;        //Each time the value of num increases by 1
//                      //It can be simplified as:  num++
//  
//  return sum;         //return the final cumulative value
//
//The do..while is a variant of while. The example above can be written like this:
//function sum1_100(){
//  var sum=0,num=1;
//  do{
//    sum+=num;
//    num++;
//  }while (num<=100)
//  return sum;
//}
//
//sum1_100=()->
//  var sum=0,num=1;
//  do
//    sum+=num;
//    num++;
//  while (num<=100)
//  return sum;
//
//The difference is, while judges the condition before perform code execution, do..while judges the condition after code run one time.
//Finally, it is worth mentioning: Do not forget to change the value of the variable (for conditional expressions), otherwise it will turn into an infinite loop.
//Ok, lesson is over. Let us do some task with while.
//Task
//Coding in function padIt, function accept 2  parameters:
//
//str,  it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
//n, it's a number, how many times to pad the string.
//
//Behaviour
//You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.
//Finally, return the padded string.
//Series
//( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)
//
//#1: create your first JS function helloWorld
//#2: Basic data types--Number
//#3:  Basic data types--String
//#4:  Basic data types--Array
//#5:  Basic data types--Object
//#6:  Basic data types--Boolean and conditional statements if..else
//#7:  if..else and ternary operator
//#8: Conditional statement--switch
//#9: loop statement --while and do..while
//#10: loop statement --for
//#11: loop statement --break,continue
//#12: loop statement --for..in and for..of
//#13: Number object and  its properties
//#14: Methods of Number object--toString() and toLocaleString()
//#15: Methods of Number object--toFixed(), toExponential() and toPrecision()
//#16: Methods of String object--slice(), substring() and substr()
//#17: Methods of String object--indexOf(), lastIndexOf() and search()
//#18: Methods of String object--concat() split() and its good friend join()
//#19: Methods of String object--toUpperCase() toLowerCase() and replace()
//#20: Methods of String object--charAt() charCodeAt() and fromCharCode()
//#21: Methods of String object--trim() and the string template
//#22: Unlock new skills--Arrow function,spread operator and deconstruction
//#23: methods of arrayObject---push(), pop(), shift() and unshift()
//#24: methods of arrayObject---splice() and slice()
//#25: methods of arrayObject---reverse() and sort()
//#26: methods of arrayObject---map()
//#27: methods of arrayObject---filter()
//#28: methods of arrayObject---every() and some()
//#29: methods of arrayObject---concat() and join()
//#30: methods of arrayObject---reduce() and reduceRight()
//#31: methods of arrayObject---isArray() indexOf() and toString()
//#32: methods of Math---round() ceil() and floor()
//#33: methods of Math---max() min() and abs()
//#34: methods of Math---pow() sqrt() and cbrt()
//#35: methods of Math---log() and its family
//#36: methods of Math---kata author's lover:random()
//#37: Unlock new weapon---RegExp Object
//#38: Regular Expression--"^","$", "." and test()
//#39: Regular Expression--"?", "*", "+" and "{}"
//#40: Regular Expression--"|", "[]" and "()"
//#41: Regular Expression--""
//#42: Regular Expression--(?:), (?=) and (?!)
//

function padIt(str,n){
    let output = str
    let i = 0
    while (i < n){
      if (i % 2 === 0) {
      output = "*" + output
      }
      if (i % 2 === 1) {
      output += "*"
      }
      i++
    }
    return output
  }

//Object Oriented Piracy 
//
//Ahoy matey!
//You are a leader of a small pirate crew. And you have a plan.
//With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board. 
//Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?
//You begin with writing a generic Ship class / struct:
//function Ship(draft,crew) {
// this.draft = draft;
// this.crew = crew;
//}
//
//class Ship:
//    def __init__(self, draft, crew):
//        self.draft = draft
//        self.crew = crew
//
//public class Ship
//{
//  public int Draft;
//  public int Crew;
//  
//  public Ship(int draft, int crew)
//  {
//    Draft = draft;
//    Crew = crew;
//  }
//}
//
//struct Ship {
//  draft: u32,
//  crew: u32,
//}
//
//Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:
//
//draft - an estimate of the ship's weight based on how low it is in the water
//crew - the count of crew on board
//
//var titanic = new Ship(15, 10);
//
//Titanic = Ship(15, 10)
//
//Ship titanic = new Ship(15, 10);
//
//  let titanic = Ship {
//      draft : 15,
//      crew : 10,
//  };
//
//Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!
//Add the method
//isWorthIt
//
//is_worth_it
//
//is_worth_it(&self)
//
//IsWorthIt
//
//to decide if the ship is worthy to loot. For example:
//titanic.isWorthIt() // return false
//
//Titanic.is_worth_it()
//False
//
//titanic.IsWorthIt() => false
//
//titanic.is_worth_it() -> false
//
//This Kata teaches you the very basic of method creation.
//Good luck!

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
     
     this.isWorthIt = function() {
       if (draft - (crew * 1.5) > 20){
         return true
       } else {
         return false
       }
     }
   }

//Basic subclasses - Adam and Eve
//
//According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.
//You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

class God{
    /**
     * @returns Human[]
     */
      static create(){
        return [new Man, new Woman]
      }
    }
    class Human{
      
    }
    class Man extends Human{
      
    }
    class Woman extends Human{
      
    }