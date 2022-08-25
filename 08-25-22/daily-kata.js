//Make a function that does arithmetic!
//
//Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them. 
//a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
//The four operators are "add", "subtract", "divide", "multiply". 
//A few examples:(Input1, Input2, Input3 --> Output)
//5, 2, "add"      --> 7
//5, 2, "subtract" --> 3
//5, 2, "multiply" --> 10
//5, 2, "divide"   --> 2.5
//
//Try to do it without using if statements!

function arithmetic(a, b, operator){
    switch(operator){
      case 'add':
        return a + b
      case 'subtract':
        return a - b
      case 'multiply':
        return a * b
      case 'divide':
        return a / b
    }
  }

//Sum of all the multiples of 3 or 5
//
//Your task is to write function findSum.
//Upto and including n, this function will return the sum of all multiples of 3 and 5.
//For example:
//findSum(5) should return 8 (3 + 5)
//findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
    let output = 0
    for(let i = 1; i <= n; i++){
      if (i % 3 === 0 || i % 5 === 0){
        output += i
      }
    }
    return output
  }

//Two fighters, one winner.
//
//Create a function that returns the name of the winner in a fight between two fighters.
//Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
//Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
//Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
//Example:
//  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
//  
//  Lew attacks Harry; Harry now has 3 health.
//  Harry attacks Lew; Lew now has 6 health.
//  Lew attacks Harry; Harry now has 1 health.
//  Harry attacks Lew; Lew now has 2 health.
//  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
//
//class Fighter(object):
//    def __init__(self, name, health, damage_per_attack):
//        self.name = name
//        self.health = health
//        self.damage_per_attack = damage_per_attack
//        
//    def __str__(self): return "Fighter({}, {}, {})".format(self.name, self.health, self.damage_per_attack)
//    __repr__=__str__
//
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {
let attacker = [fighter1,fighter2].find(x => x.name === firstAttacker)
let defender = [fighter1,fighter2].find(x => x.name !== firstAttacker)
while (fighter1.health >= 0 && fighter2.health >= 0){
    defender.health -= attacker.damagePerAttack
    if (fighter1.health <= 0 || fighter2.health <= 0){
        break
    }
    let tempAttacker = attacker
    attacker = defender
    defender = tempAttacker
    }
return attacker.name
}