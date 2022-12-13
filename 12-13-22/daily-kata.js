//Hells Kitchen
//
//Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
//Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language. 
//Rules:
//Obviously the words should be Caps,
//Every word should end with '!!!!',
//Any letter 'a' or 'A' should become '@',
//Any other vowel should become '*'.

function gordon(a){
    return a.split(' ').map(ele => {
      ele = ele.toUpperCase()
      while(ele.includes('A')){
        ele = ele.replace('A', '@')
      }
      while(ele.includes('E')){
        ele = ele.replace('E', '*')
      }
      while(ele.includes('I')){
        ele = ele.replace('I', '*')
      }
      while(ele.includes('O')){
        ele = ele.replace('O', '*')
      }
      while(ele.includes('U')){
        ele = ele.replace('U', '*')
      }
      return `${ele}!!!!`
    }).join(' ')
  }