//Name Array Capping
//
//Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.
//example
//cap_me(['jo', 'nelson', 'jurie']) # returns ['Jo', 'Nelson', 'Jurie']
//cap_me(['KARLY', 'DANIEL', 'KELSEY']) # returns ['Karly', 'Daniel', 'Kelsey']
//

function capMe(names) {
    return names.map(x => {
      return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()
    })
  }