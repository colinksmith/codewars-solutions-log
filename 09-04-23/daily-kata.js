//Ch4113ng3
//
//Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1
//e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt){
    txt = txt.split('')
    for (let i = 0; i < txt.length; i++) {
      if (txt[i] === 'a') {
        txt[i] = '4'
      } else if (txt[i] === 'A') {
        txt[i] = '4'
      } else if (txt[i] === 'e') {
        txt[i] = '3'
      } else if (txt[i] === 'E') {
        txt[i] = '3'
      } else if (txt[i] === 'l') {
        txt[i] = '1'
      }
    }
    return txt.join('')
  }