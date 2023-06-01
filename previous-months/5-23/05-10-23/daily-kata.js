//Show multiples of 2 numbers within a range
//
//Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.
//Python, Javascript, Java, Ruby versions: return results in a list/array
//NOTICE:
//
//Do NOT worry about checking zeros or negative values.
//To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation
//

// Javascript: return multiples into an array
function multiples(s1,s2,s3){
    let output = []
    let low = Math.min(s1, s2)
    let high = Math.max(s1, s2)
    for (let i = high; i < s3; i += high ) {
      if (i % low === 0) {
        output.push(i)
      }
    }
    return output;
  }