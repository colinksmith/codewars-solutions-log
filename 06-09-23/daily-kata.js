//Counting in the Amazon
//
//  The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:
//  1 = anane 
//  2 = adak  
//  3 = adak anane 
//  4 = adak adak 
//  5 = adak adak anane 
//  6 = adak adak adak
//  7 = adak adak adak anane
//  8 = adak adak adak adak 
//Take a given number and return the Arara's equivalent. 
//e.g. 
//countArara(3) 'adak anane'
//
//countArara(8) 'adak adak adak adak'
//
//countArara 3 // -> "adak anane"
//
//countArara 8 // -> "adak adak adak adak"
//
//https://en.wikipedia.org/wiki/Arara_people

function countArara(n) {
    let output = ''
    let count = Math.floor(n / 2)
    for (let i = 0; i < count; i++) {
      output += ' adak'
    }
    if (n % 2 === 1) {
      output += ' anane'
    }
    return output.slice(1)
  }