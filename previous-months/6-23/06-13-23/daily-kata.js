//Reverser
//
//Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.
//# Please do not use anything from the following list:
//['encode','decode','join','zfill','codecs','chr','bytes','ascii', 'substitute','template','bin', 'os','sys','re', '"', "'", 'str','repr', '%s', 'format', 'type', '__', '.keys','eval','exec','subprocess']
//            
//

function reverse(n){
    let output = 0
    while (n >= 10) {
      n /= 10
      let temp = 10 * n % 10
      output = output * 10 + Math.trunc(temp)
    }
    return output * 10 + Math.trunc(n)
  }