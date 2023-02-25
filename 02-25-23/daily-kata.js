//Find Count of Most Frequent Item in an Array
//
//Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
//Example
//input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
//ouptut: 5 
//
//The most frequent number in the array is -1 and it occurs 5 times.

function mostFrequentItemCount(collection) {
    let counts = collection.reduce((prev, curr) => {
      const str = String(curr)
      if (prev[str]) {
        prev[str]++
      } else {
        prev[str] = 1
      }
      
      return prev
    }, {})
    let max = 0
    for (let count in counts){
      max = Math.max(counts[count], max)
    }
    return max
  }
  mostFrequentItemCount([3, -1, -1])