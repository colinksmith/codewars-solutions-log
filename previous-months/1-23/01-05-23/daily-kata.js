//We Have Liftoff
//
//You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.
//Unfortunately, the person reading the countdown only knows how to read strings.  After the array is sorted correctly make sure it's in a format he can understand.
//Between each number should be a space and after the final number (n) should be the word 'liftoff!'
//Example:
//# Given
//instructions = [8,1,10,2,7,9,6,3,4,5]
//# Should return
//"10 9 8 7 6 5 4 3 2 1 liftoff!"
//

function liftoff(instructions){
    let output = instructions.sort((a, b) => b - a).join(' ')
    return `${output} liftoff!`
  }