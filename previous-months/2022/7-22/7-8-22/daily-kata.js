//Who ate the cookie?
//
//For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is:
//"Who ate the last cookie? It was (name)!"
//Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach!
//(The reason you return Zach is because the input is a string)
//Note: Make sure you return the correct message with correct spaces and punctuation.
//Please leave feedback for this kata.
//Cheers!

function cookie(x){
    let eater = ''
    switch(typeof x){
      case 'string':
        eater = 'Zach'
        break
      case 'number':
        eater = 'Monica'
        break
      default:
        eater = 'the dog'
        break
    }
    return `Who ate the last cookie? It was ${eater}!`
  }

//get ascii value of character
//
//Get ASCII value of a character.
//For the ASCII table you can refer to http://www.asciitable.com/

function getASCII(c){
    return c.charCodeAt()
  }

//Leonardo Dicaprio and Oscars
//
//You have to write a function that describe Leo:
//def leo(oscar):
//  pass
//
//function leo(oscar) {
//
//}
//
//def leo(oscar) do
//  # ...
//end
//
//if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
//if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
//if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
//if it was over 88 you should return "Leo got one already!"

function leo(oscar){
    if (oscar > 88) {
      return 'Leo got one already!'
    } else if (oscar === 88) {
      return 'Leo finally won the oscar! Leo is happy'
    } else if (oscar === 87) {
      return "When will you give Leo an Oscar?"
    } else if (oscar === 86) {
      return "Not even for Wolf of wallstreet?!"
    } else {
      return 'When will you give Leo an Oscar?'
    }
  }