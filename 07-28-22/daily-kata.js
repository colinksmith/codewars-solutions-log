//Classic Hello World
//
//You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything
//Note that for some languages, the function main is the entry point of the program.
//Here's how it will be tested:
//    java Solution.class parameter1 parameter2
//
//    Solution.main("parameter1","parameter2");
//
//    Solution.main "parameter1", "parameter2","parametern"
//
//    Solution.main("parameter1", "parameter2","parametern")
//
//    Solution.main("parameter1", "parameter2","parametern")
//
//   Solution.Main("parameter1", "parameter2","parametern")
//
//   Solution::main("parameter1", "parameter2", "parametern")
//
//   no extra lines there
//
//   greet:greet
//
//Hints:
//
//Check your references 
//Think about the scope of your method
//For prolog you can use write but there are better ways
//If you still don't get it probably you can define main as an attribute of the Solution class that accepts a single argument, and that only prints "Hello World!" without any return.
//

// Print "Hello World!" to the screen
  class Solution{
    constructor(arg){
    }
    static main(){
      console.log('Hello World!')
  
    }
  }

//Add new item (collections are passed by reference)
//
//Add an item to the list:
//AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
//In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.
//P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)

function addExtra( listOfNumbers ){
    listOfNumbers.push(13)
    output = listOfNumbers
    return output
  }