//Odd Ones Out!
//
//The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!
//Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.
//odd_ones_out([1, 2, 3, 1, 3, 3]) = [1, 1]
//
//In the above example:
//
//the number 1 appears twice
//the number 2 appears once
//the number 3 appears three times
//
//2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]
//Here are more examples:
//odd_ones_out([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
//odd_ones_out([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
//odd_ones_out([1, 2, 3]) = []
//odd_ones_out([1]) = []
//
//Are you up to the challenge?

function oddOnesOut(nums) {
    let removeVals = []
    let counts = nums.reduce((prev, curr) => {
      if (prev[curr]) {
        prev[curr] += 1
      } else {
        prev[curr] = 1
      }
      return prev
    }, {})
    for (let count in counts) {
      if (counts[count] % 2 === 1) {
        removeVals.push(Number(count))
      }
    }
    return nums.filter(x => !removeVals.includes(x))
  }