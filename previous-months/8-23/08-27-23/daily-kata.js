//Sorting Dictionaries
//
//Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?
//Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).
//The list must be sorted by the value and be sorted largest to smallest.
//Examples
//sort_dict({3:1, 2:2, 1:3}) == [(1,3), (2,2), (3,1)]
//sort_dict({1:2, 2:4, 3:6}) == [(3,6), (2,4), (1,2)]
//

function sortDict(dict) {
    let keys = []
    for (let property in dict) {
      if (!isNaN(property)) {
        property = +property
      }
      keys.push([property, dict[property]])
    }
    keys.sort((a, b) => b[1] - a[1])
    return keys
  }

//parameters:
//object eg {3:1, 2:2, 1:3}
//return
//array of 2 items, sorted by value eg [[1,3], [2,2], [3,1]]
//turn object keys into array pairs
//sort