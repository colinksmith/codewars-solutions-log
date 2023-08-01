//Can Santa save Christmas?
//
//Can Santa save Christmas?
//Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
//But he has only 24 hours left. Can he do it?
//Your Task:
//You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not.
//In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
//
//If this kata was to easy for you. Try the harder one.
//This kata is part of the Collection "Date fundamentals":
//
//#1 Count the Days!
//#2 Minutes to Midnight
//#3 Can Santa save Christmas?
//#4 Christmas Present Calculator
//

function determineTime (durations) {
    let output = false
    let time = [0, 0, 0]
    durations.forEach(str => {
      let arr = str.split(':')
      time[0] += +arr[0]
      time[1] += +arr[1]
      time[2] += +arr[2]
    })
    while (time[2] >= 60) {
      time[2] -= 60
      time[1] += 1
    }
    while (time[1] >= 60) {
      time[1] -= 60
      time[0] += 1
    }
    if (time[0] < 24 || (
       time[0] === 24 &&
       time[1] === 0 &&
       time[2] === 0
       )) {
      output = true
    }
    return output
  }