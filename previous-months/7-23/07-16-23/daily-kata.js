//Geometric Progression Sequence
//
//In your class, you have started lessons about geometric progression.
//Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.
//Result should be separated by comma and space.
//Example
//geometric_sequence_elements(2, 3, 5) == '2, 6, 18, 54, 162'
//
//More info: https://en.wikipedia.org/wiki/Geometric_progression

function geometricSequenceElements(a, r, n){
    let output = []
    for (let i = 0; i < n; i++) {
      output.push((a * ((r ** i) - 1)) + a )
    }
    return output.join(', ')
  }