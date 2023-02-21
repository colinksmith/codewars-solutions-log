//How many arguments
//
//Create a function args_count, that returns the count of passed arguments
//args_count(1, 2, 3) -> 3
//args_count(1, 2, 3, 10) -> 4
//



//Count all the sheep on farm in the heights of New Zealand
//
//Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).
//Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.
//Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.
//Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5
//Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6
//Good luck! :-)

//goal is to return third parameter minus nums in both arrays

// 3 parameters( [array of nums], [array of nums], num)
// array nums always positive, no zeros, might be empty, 

// return number (num - both arrays of nums)
// 

//lostSheep([5], [5], 15) --> returns 5
//lostSheep([1,2,4], [4,5,6], 25) --> returns 4

function lostSheep(friday, saturday, total) {
    let sum = 0
    //sum all array values
    sum += friday.reduce((prev, curr) => {
        return prev + curr
    }, 0)
    sum += saturday.reduce((prev, curr) => {
        return prev + curr
    }, 0)
    //return total - sum
    return total - sum
}

console.log(lostSheep([5], [5], 15)) // 5
console.log(lostSheep([1,2,4], [4,5,6], 25)) // 3
console.log(lostSheep([1,2],[3,4],15)) // 5