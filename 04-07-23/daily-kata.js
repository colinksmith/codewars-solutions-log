//Split The Bill
//
//You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. Who will pay what? 
//Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!
//The function should take one parameter: an object/dict with two or more name-value pairs that represent the members of the group and the amount spent by each.
//Your function should return an object/dict with the same names, showing how much money the members should pay or receive.
//Further points:
//
//The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
//If value is a decimal, round to two decimal places.
//
//Translations and comments (and upvotes!) welcome.
//Example
//3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.
//var group = {
//    A: 20, 
//    B: 15, 
//    C: 10
//}
//
//splitTheBill(group) // returns {A: 5, B: 0, C: -5}
//
//Good Luck and Happy Eats!

function splitTheBill(x) {
    let sum = 0,
        length = 0,
        ave = 0
    for (const person in x) {
      sum += x[person]
      length++
    }
    ave = Math.round((sum / length) * 100) / 100
    for (const person in x) {
      x[person] = Math.round((x[person] - ave) * 100) / 100
    }
    return x
  }
  splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 })