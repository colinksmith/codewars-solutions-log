//Calculate Two People's Individual Ages
//
//Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:
//
//sum < 0
//difference < 0
//Either of the calculated ages come out to be negative
//

function getAges(sum,difference){
    if (sum < 0 || difference < 0){
      return null
    }
    let age1 = (sum / 2) + (difference / 2)
    let age2 = (sum / 2) - (difference / 2)
    if (age1 < 0 || age2 < 0){
      return null
    }
    return [age1, age2]
  };