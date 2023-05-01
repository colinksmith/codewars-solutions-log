//Highest and Lowest
//
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//Examples
//Input: "1 2 3 4 5"   =>  Output: "5 1"
//Input: "1 2 -3 4 5"  =>  Output: "5 -3"
//Input: "1 9 3 4 -5"  =>  Output: "9 -5"
//
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//
//Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
//Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
//Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"
//
//highAndLow "1 2 3 4 5"  // return "5 1"
//highAndLow "1 2 -3 4 5" // return "5 -3"
//highAndLow "1 9 3 4 -5" // return "9 -5"
//
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//
//high_and_low("1 2 3 4 5")  // return "5 1"
//high_and_low("1 2 -3 4 5") // return "5 -3"
//high_and_low("1 9 3 4 -5") // return "9 -5"
//
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//
//highAndLow("1 2 3 4 5")  # return "5 1"
//highAndLow("1 2 -3 4 5") # return "5 -3"
//highAndLow("1 9 3 4 -5") # return "9 -5"
//
//high_and_low("1 2 3 4 5")  # return "5 1"
//high_and_low("1 2 -3 4 5") # return "5 -3"
//high_and_low("1 9 3 4 -5") # return "9 -5"
//
//high_and_low("1 2 3 4 5")  # return "5 1"
//high_and_low("1 2 -3 4 5") # return "5 -3"
//high_and_low("1 9 3 4 -5") # return "9 -5"
//
//high_and_low("1 2 3 4 5")  # return "5 1"
//high_and_low("1 2 -3 4 5") # return "5 -3"
//high_and_low("1 9 3 4 -5") # return "9 -5"
//
//high_and_low("1 2 3 4 5", result)  // result "5 1"
//high_and_low("1 2 -3 4 5", result) // result "5 -3"
//high_and_low("1 9 3 4 -5", result) // result "9 -5"
//
//highAndLow("1 2 3 4 5")  // return "5 1"
//highAndLow("1 2 -3 4 5") // return "5 -3"
//highAndLow("1 9 3 4 -5") // return "9 -5"
//
//highAndLow "1 2 3 4 5")  # return "5 1"
//highAndLow "1 2 -3 4 5") # return "5 -3"
//highAndLow "1 9 3 4 -5") # return "9 -5"
//
//HighAndLow("1 2 3 4 5")  // return "5 1"
//HighAndLow("1 2 -3 4 5") // return "5 -3"
//HighAndLow("1 9 3 4 -5") // return "9 -5"
//
//highAndLow("1 2 3 4 5")  // return "5 1"
//highAndLow("1 2 -3 4 5") // return "5 -3"
//highAndLow("1 9 3 4 -5") // return "9 -5"
//
//Kata.high_and_low("1 2 3 4 5")  # return "5 1"
//Kata.high_and_low("1 2 -3 4 5") # return "5 -3"
//Kata.high_and_low("1 9 3 4 -5") # return "9 -5"
//
//(high-and-low "1 2 3 4 5")  ; return "5 1"
//(high-and-low "1 2 -3 4 5") ; return "5 -3"
//(high-and-low "1 9 3 4 -5") ; return "9 -5"
//
//highandlow("1 2 3 4 5")  # return "5 1"
//highandlow("1 2 -3 4 5") # return "5 -3"
//highandlow("1 9 3 4 -5") # return "9 -5"
//
//high_and_low("1 2 3 4 5")  // return "5 1"
//high_and_low("1 2 -3 4 5") // return "5 -3"
//high_and_low("1 9 3 4 -5") // return "9 -5"
//
//        HighAndLow("1 2 3 4 5")
//      * RESULT = "5 1"
//        HighAndLow("1 2 -3 4 5")
//      * RESULT = "5 -3"
//        HighAndLow("1 9 3 4 -5")
//      * RESULT = "9 -5"
//
//Sol.high_and_low("1 2 3 4 5")  // return "5 1"
//Sol.high_and_low("1 2 -3 4 5") // return "5 -3"
//Sol.high_and_low("1 9 3 4 -5") // return "9 -5"
//
//Notes
//
//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.
//

