//Selective fear of numbers
//
//I've got a crazy mental illness.
//I dislike numbers a lot. But it's a little complicated:
//The number I'm afraid of depends on which day of the week it is...
//This is a concrete description of my mental illness:
//Monday     --> 12
//Tuesday    --> numbers greater than 95
//Wednesday  --> 34
//Thursday   --> 0
//Friday     --> numbers divisible by 2
//Saturday   --> 56
//Sunday     --> 666 or -666
//Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

var AmIAfraid = function(day, num){
    let output = false
    switch(day) {
        case 'Monday': output = num === 12
            break
        case 'Tuesday': output = num > 95
            break
        case 'Wednesday': output = num === 34
            break
        case 'Thursday': output = num === 0
            break
        case 'Friday': output = num % 2 === 0
            break
        case 'Saturday': output = num === 56
            break
        case 'Sunday': output = num === 666 || num === -666
    }
    return output
  }
  console.log(AmIAfraid("Tuesday", 900))