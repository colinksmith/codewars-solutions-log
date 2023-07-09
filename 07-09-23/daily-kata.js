//Monotone travel
//
//Story
//Peter lives on a hill, and he always moans about the way to his home. "It's always just up. I never get a rest". But you're pretty sure that at least at one point Peter's altitude doesn't rise, but fall. To get him, you use a nefarious plan: you attach an altimeter to his backpack and you read the data from his way back at the next day.
//Task
//You're given a list of compareable elements:
//Ord a => [a]
//
//Your job is to check whether for any x all successors are greater or equal to x.
//isMonotone [1,2,3] == True
//isMonotone [1,1,2] == True
//isMonotone [1]     == True
//isMonotone [3,2,2] == False
//
//If the list is empty, Peter has probably removed your altimeter, so we cannot prove him wrong and he's still right:
//isMonotone []      == True
//
//Such a sequence is also called monotone or monotonic sequence, hence the name isMonotone.

var isMonotone = function(arr){
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false
      }
    }
    return true
  }