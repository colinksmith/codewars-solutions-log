//Password maker
//
//One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word. 
//Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):
//
//instead of including i or I put the number 1 in the password;
//instead of including o or O put the number 0 in the password;
//instead of including s or S put the number 5 in the password.
//
//Examples:
//"Give me liberty or give me death"  --> "Gml0gmd"
//"Keep Calm and Carry On"            --> "KCaC0"
//

function makePassword(phrase) {
    let output = ''
    phrase
      .split(' ')
      .forEach(word => {
        switch (word[0]) {
            case 'i':
            case 'I':
              output += '1'
              break
            case 'o':
            case 'O':
              output += '0'
              break
            case 's':
            case 'S':
              output += '5'
              break
            default :
              output += word[0]
        }
      })
    return output
  }