//Correct the time-string
//
//A new task for you!
//
//You have to create a method, that corrects a given time string.
//There was a problem in addition, so many of the time strings are broken.
//Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
//
//Examples
//"09:10:01" -> "09:10:01"  
//"11:70:10" -> "12:10:10"  
//"19:99:99" -> "20:40:39"  
//"24:01:01" -> "00:01:01"  
//
//If the input-string is null or empty return exactly this value! (empty string for C++)
//If the time-string-format is invalid, return null. (empty string for C++)
//Have fun coding it and please don't forget to vote and rank this kata! :-) 
//I have created other katas. Have a look if you like coding and challenges.

function timeCorrect(timestring) {
    if (!timestring) return timestring
  
  
    let timeArr = timestring.split(':').map(str => Number(str))
    if (timeArr.filter(x => !Number.isNaN(+x)).length !== 3) return null
    if (timeArr[2] >= 60) {
      timeArr[2] -= 60
      timeArr[1] += 1
    }
    if (timeArr[1] >= 60) {
      timeArr[1] -= 60
      timeArr[0] += 1
    }
    while (timeArr[0] >= 24) {
      timeArr[0] -= 24
    }
    return timeArr.map(num => String(num).padStart(2, '0')).join(':')
  }
timeCorrect('11:70:10')