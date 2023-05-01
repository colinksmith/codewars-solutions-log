//Insert dashes
//
//Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
//Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    num = String(num).split('')
    num = num.map( (n, index, arr) => {
      if (n % 2 === 1 && arr[index - 1] % 2 === 1){
        return `-${n}`
      } else {
        return n
      }
    })
    return num.join('')
  }