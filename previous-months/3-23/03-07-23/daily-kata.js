//Interview Question (easy)
//
//You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).
//For example:
//"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
//
//As you can see, the letter c is shown only once, but with 2 asterisks.
//The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.
//Note that the return string must list the letters in order of their first appearance in the original string.
//More examples:
//"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
//"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
//
//Have fun! ;)

function getStrings(city){
    let output = []
    let counts = city.split('').reduce((prev, curr) => {
      let lowerCase = curr.toLowerCase()
      if (curr.toLowerCase() === curr.toUpperCase()) return prev
      if (!prev[lowerCase]) {
        prev[lowerCase] = '*'
      } else {
        prev[lowerCase] += '*'
      }
      return prev
    }, {})
    for (let count in counts) {
      output.push( `${count}:${counts[count]}`)
    }
    return output.join(',')
  }
  console.log(getStrings("Las Vegas"))