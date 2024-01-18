//Convert the score
//
//You are working at a lower league football stadium and you've been tasked with automating the scoreboard.
//The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!
//e.g. "The score is four nil" should return [4,0]
//Either teams score has a range of 0-9, and the ref won't say the same string every time e.g. 
//"new score: two three"
//  
//"two two"
//  
//"Arsenal just conceded another goal, two nil"
//
//Note:
//Please return an array
//
//Please rate and enjoy!

function scoreboard(string) {
    const key = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let arr = string.split(' ')
    let output = arr.filter(x => key.includes(x))
                    .map(x => key.indexOf(x))
    return output
  }