//Max-min arrays
//
//In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc. 
//For example:
//solve([15,11,10,7,12]) = [15,7,12,10,11]
//
//The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on. 
//More examples in the test cases. 
//Good luck!

function solve(arr){
    const output = []
    const length = arr.length
    for (let i = 0; i < length; i++){
      if (i % 2 === 0){
        let currMaxIndex = arr.indexOf(Math.max(...arr))
        let max = arr.splice(currMaxIndex, 1)[0]
        output.push(max)
      } else {
        let currMinIndex = arr.indexOf(Math.min(...arr))
        let min = arr.splice(currMinIndex, 1)[0]
        output.push(min)
      }
    }
    return output
};
console.log(solve([15,11,10,7,12]))