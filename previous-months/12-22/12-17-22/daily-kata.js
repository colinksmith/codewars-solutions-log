//Ordered Count of Characters
//
//Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
//Consult the solution set-up for the exact data structure implementation depending on your language.
//Example:
//ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]
//

const orderedCount = function (text) {
    return text.split('').reduce((prev, curr) =>{
      for (let i = 0; i < prev.length; i++){
        if (prev[i][0] === curr) {
          prev[i][1] += 1
          return prev
        }
      }
      prev.push([curr, 1])
      return prev
    }, [])
    
  }