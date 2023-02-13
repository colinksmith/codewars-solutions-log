//Remove All The Marked Elements of a List
//
//Define a method/function that removes from a given array of integers all the values contained in a second array.
//Examples (input -> output):
//* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
//* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
//* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
//
//Enjoy it!!

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(ele => {
      if (values_list.includes(ele)){
        return false
      } else {
        return true
      }
    })
  }

//Array.diff
//
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
//arrayDiff([1,2],[1]) == [2]
//
//If a value is present in b, all of its occurrences must be removed from the other:
//arrayDiff([1,2,2,2,3],[2]) == [1,3]
//

function arrayDiff(a, b) {
    return a.filter(ele => {
    if (b.includes(ele)){
      return false
    } else {
      return true
    }
  })
}