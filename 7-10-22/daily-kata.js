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