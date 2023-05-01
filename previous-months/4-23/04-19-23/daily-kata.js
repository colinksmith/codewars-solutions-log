//Sum of a Beach
//
//Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
//Examples
//SumOfABeach("WAtErSlIde")                    ==>  1
//SumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
//SumOfABeach("gOfIshsunesunFiSh")             ==>  4
//SumOfABeach("cItYTowNcARShoW")               ==>  0
//

function sumOfABeach(beach) {
    let sandSum = beach.toLowerCase().split('sand').length - 1
    let waterSum = beach.toLowerCase().split('water').length - 1
    let fishSum = beach.toLowerCase().split('fish').length - 1
    let sunSum = beach.toLowerCase().split('sun').length - 1
    return sandSum + waterSum + fishSum + sunSum
  }