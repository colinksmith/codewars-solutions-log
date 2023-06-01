//Powers of i
//
//iii is the imaginary unit, it is defined by i²=−1i² = -1i²=−1, therefore it is a solution to x²+1=0x² + 1 = 0x²+1=0.
//Your Task
//Complete the function pofi that returns iii to the power of a given non-negative integer in its simplest form, as a string (answer may contain iii).

function pofi(n){
    let output = ''
    switch (n % 4) {
        case 0:
          output = '1'
          break
        case 1:
          output = 'i'
          break
        case 2:
          output = '-1'
          break
        case 3:
          output = '-i'
          break
    }
    return output
  }