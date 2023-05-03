//Debug Basic Calculator
//
//Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.
//calculate(2,"+", 4); //Should return 6
//calculate(6,"-", 1.5); //Should return 4.5
//calculate(-4,"*", 8); //Should return -32
//calculate(49,"/", -7); //Should return -7
//calculate(8,"m", 2); //Should return null
//calculate(4,"/",0) //should return null
//
//Kind of a fork (not steal :)) of Basic Calculator kata by TheDoctor. 

var calculate = function calculate(a, o, b) {
    var result = 0;
    
    if(o === "+") { 
      return a + b;
    } else if (o === "-") {
      return a - b;
    } else if (o === "/" && b !== 0) { 
      return a / b;
    } else if (o === "*") {
      return a * b;
    } else {
      return null
    }
    return result; 
   }