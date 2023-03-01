//Unlucky Days
//
//Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
//Find the number of Friday 13th in the given year.
//Input: Year in Gregorian calendar as integer.
//Output: Number of Black Fridays in the year as an integer.
//Examples:
//unluckyDays(2015) == 3
//unluckyDays(1986) == 1
//

function unluckyDays(year){
    let count = 0
    let date = new Date()
    date.setFullYear(year)
    for (let i = 0; i <= 11; i++) {
      date.setMonth(i)
        date.setDate(13)
      if (date.getDay() === 5){
        count++
      }
    }
    return count
  }

  console.log(unluckyDays(1001))