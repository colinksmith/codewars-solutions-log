//USD => CNY
//
//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
//Examples (Input -> Output)
//15  -> '101.25 Chinese Yuan'
//465 -> '3138.75 Chinese Yuan'
//
//The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21") 

function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
  }

//Kata Example Twist
//
//This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata). 
//Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = []
for (let i = 0; i < 1000; i++) {
    websites.push('codewars')
}

//How old will I be in 2099?
//
//Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
//Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
//Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
//"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
//Good Luck!

function  calculateAge(a, b) {
    let years = b - a
    pluralKey = {
        true: 'years',
        false: 'year',
    }
    if (years === 0){
        return 'You were born this very year!'
    } else if (years === 1){
        return `You are ${years} year old.`
    } else if (years === -1){
        return `You will be born in ${-years} year.`
    } else if (years > 0){
        return `You are ${years} years old.`
    } else if (years < 0){
        return `You will be born in ${-years} years.`
    }
}
    



//Color Ghost
//
//Color Ghost
//Create a class Ghost
//Ghost objects are instantiated without any arguments.
//Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
//ghost = new Ghost();
//ghost.color //=> "white" or "yellow" or "purple" or "red"
//
//ghost = new Ghost()
//ghost.color #=> "white" or "yellow" or "purple" or "red"
//
//ghost = Ghost.new
//ghost.color  #=> "white" or "yellow" or "purple" or "red"
//
//ghost = Ghost()
//ghost.color  #=> "white" or "yellow" or "purple" or "red"
//
//Ghost ghost = new Ghost();
//ghost.getColor(); //=> "white" or "yellow" or "purple" or "red"
//
//Ghost ghost = new Gost();
//ghost.GetColor(); // => "white" or "yellow" or "purple" or "red"
//

class Ghost {
    constructor(){
        this.colorKey = {
            1: 'white',
            2: 'yellow',
            3: 'purple',
            4: 'red',
        }
        this.random = Math.ceil(Math.random() * 4)
        this.color = this.colorKey[this.random]
    }
};

//Training JS #5: Basic data types--Object
//
//In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}
//You can define the object attributes during initialization, like this:
//var animal={name:"dog"}
//
//you can also set/get some properties after the object definition, like this:
//var animal={}
//animal.name="dog"  (or animal["name"]="dog")
//
//Task
//Give you a function animal, accept 1 parameter:obj like this:
//{name:"dog",legs:4,color:"white"}
//
//and return a string like this:
//"This white dog has 4 legs."
//
//When you have finished the work, click "Run Tests" to see if your code is working properly.
//In the end, click "Submit" to submit your code pass this kata.
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

function animal(obj){
    return `This ${color} ${name} has ${}`
}
  
  