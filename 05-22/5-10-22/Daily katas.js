// NBA full 48 minutes average
// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

function pointsPer48(ppg, mpg) {
    if (ppg === 0) {
        return 0
    }
    let fraction = mpg / 48
    let output = ppg / fraction
    return +output.toFixed(1)
}

// Evil or Odious
// The number n is Evil if it has an even number of 1's in its binary representation.
// The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

// The number n is Odious if it has an odd number of 1's in its binary representation.
// The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

// You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.

// good luck :)

function evil(n) {
    let binary = n.toString(2)
    let accumulator = 0
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1'){
            accumulator++
        }
    }
    if (accumulator % 2 === 0) {
        return "It's Evil!"
    } else {
        return "It's Odious!"
    }
}

// Chuck Norris VII - True or False? (Beginner)
// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

// Go show some truth who's boss!

function ifChuckSaysSo(){
    return 1 < 0
}

// Fuel Calculator
// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

function fuelPrice(litres, pricePerLitre) {
    cost = 0
    if (litres < 2) {
        cost = pricePerLitre * litres
    } else if (litres < 4) {
        cost = (pricePerLitre - .05) * litres
    } else if (litres < 6) {
        cost = (pricePerLitre - .1) * litres
    } else if (litres < 8) {
        cost = (pricePerLitre - .15) * litres
    } else if (litres < 10) {
        cost = (pricePerLitre - .20) * litres
    } else if (litres >= 10) {
        cost = (pricePerLitre - .25) * litres
    }
    return Number(cost.toFixed(2))
}

// Geometry Basics: Distance between points in 2D
// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

function distanceBetweenPoints(a, b) {
    return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2)
}