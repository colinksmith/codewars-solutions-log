//Fun with ES6 Classes #1 - People, people, people
//
//Fun with ES6 Classes #1 - People, people, people
//Time for some OOP fun!
//Define a class Person with the following properties:
//
//A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set).  These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
//A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
//A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName".  For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
//
//You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.
//Have fun! :D

class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male'){
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.gender = gender
    }
    sayFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`
    }
  }

//Online RPG: player to qualifying stage?
//
//Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.
//Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.
//Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage. 
//In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".
//Otherwise return, False/false (according to the language in use).
//NOTE
//C#
//Object

function playerRankUp (points) {
    if (points >= 100){
      return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
    } else {
      return false
    }
  }