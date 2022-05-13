// Calculate Price Excluding VAT
// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1
function excludingVatPrice(price){
    if (price < 0 || (!price && price !== 0)) {
        return -1
    }
    let output = price / 1.15
    return Number(output.toFixed(2))
}
// Collatz Conjecture (3n+1)
// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
// #References

var hotpo = function(n){
    if(n == 0) return 0; //Optional Handler to n = 0
    let count = 0
    while (n !==1) {
        if (n % 2 === 0) {
            n = n / 2
            count++
        } else if (n % 2 === 1) {
            n = n * 3 + 1
            count++
        }
    }
    return count
}

// Localize The Barycenter of a Triangle
// The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. The three medians of a triangle intersect at the same point, called the barycenter or the centroid. Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

// The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

// This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).

// You know that the coordinates of the barycenter are given by the following formulas.

// source: imgur.com

// For additional information about this important point of a triangle see at: (https://en.wikipedia.org/wiki/Centroid)

// Let's see some cases:

// barTriang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]

// barTriang([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]
// The given points form a real or a degenerate triangle but in each case the above formulas can be used.

// Enjoy it and happy coding!!

function barTriang(p1, p2, p3){
    x0 = (p1[0] + p2[0] + p3[0]) / 3
    y0 = (p1[1] + p2[1] + p3[1]) / 3
    return [+(x0.toFixed(4)), +(y0.toFixed(4))]
}

// Geometry Basics: Circle Area in 2D
// This series of katas will introduce you to basics of doing geometry with computers.

// Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
// The Circle class can be seen below:

// // Represents a Circle where center is a Point and radius is a Number
// class Circle {
//   constructor(center, radius) { 
//     this.center = center; 
//     this.radius = radius;
//   }
// }
// And the Point class can be seen below:

// // Represents a Point where x and y are Numbers
// class Point {
//   constructor (x,y) { 
//     this.x = x;
//     this.y = y; 
//   }
// }
// Tests round answers to 6 decimal places.

function circleArea(circle){
    return circle.radius ** 2 * Math.PI
}

// Potenciation
// The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata

// Great coding <3

function power(x,y){
    return x ** y
}

// Geometry Basics: Circle Circumference in 2D
// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

// Write a function calculating circumference of a Circle.

// Tests round answers to 6 decimal places.

function circleCircumference(circle) {
    return circle.radius * Math.PI * 2
}