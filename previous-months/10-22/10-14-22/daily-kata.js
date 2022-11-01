//Alphabet symmetry
//
//Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5. 
//Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
//solve(["abode","ABc","xyzD"]) = [4, 3, 1]
//
//See test cases for more examples.
//Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
//Good luck!
//If you like this Kata, please try: 
//Last digit symmetry
//Alternate capitalization

function solve(arr){  
    let output = []
    arr.forEach(word => {
      output.push(sumSymmetryString(word))
    })
    return output
  };
  function sumSymmetryString(string){
    //takes a string
    //returns number of matching letters
    const key = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let count = 0
    string.split('').forEach((letter, index) => {
      if (index === key.indexOf(letter.toLowerCase())){
        count++
      }
    })
    return count
  }
  console.log(solve(["abode","ABc","xyzD"]))