//Filter unused digits
//
//Given a varying number of integer arguments, return the digits that are not present in any of them.
//Example:
//[12, 34, 56, 78]  =>  "09"
//[2015, 8, 26]     =>  "3479"
//
//Note: the digits in the resulting string should be sorted.

function unusedDigits(...arr) {
    console.log(arr)
    let key = '0123456789'
    arr.forEach(ele => {
      String(ele).split('').forEach(num => {
        if (key.indexOf(String(num)) !== -1){
          key = key.replace(num, '')
        }
      })
    })
    return key
  }