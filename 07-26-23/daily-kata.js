//Replace all items
//
//Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.
//Python / JavaScript: The function has to work for strings and lists.
//Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]
//replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]
//

function replaceAll(seq, find, replace) {
    console.log(seq, find, replace)
    if (find === replace) return seq
    switch (typeof seq) {
        case 'object': 
          while (seq.includes(find)) {
            seq[seq.indexOf(find)] = replace
          }
          break
        case 'string':
          while(seq.includes(find)) {
            seq = seq.replace(find, replace)
          }
          break
    }
    return seq
  }