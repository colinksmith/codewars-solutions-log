//Cartesian neighbors
//
//A Cartesian coordinate system is a coordinate system that specifies each point uniquely in a plane by a pair of numerical coordinates, which are the signed distances to the point from two fixed perpendicular directed lines, measured in the same unit of length.
//The сoordinates of a point in the grid are written as (x,y). Each point in a coordinate system has eight neighboring points. Provided that the grid step = 1.
//It is necessary to write a function that takes a coordinate on the x-axis and y-axis and returns a list of all the neighboring points. Points inside your returned list need not be sorted (any order is valid).
//For Example:
//cartesianNeighbor(2,2) -> {{1,1},{1,2},{1,3},{2,1},{2,3},{3,1},{3,2},{3,3}}
//cartesianNeighbor(5,7) -> {{6,7},{6,6},{6,8},{4,7},{4,6},{4,8},{5,6},{5,8}}
//

function cartesianNeighbor(x, y){
    let xMinus = x - 1
    let xPlus = x + 1
    let yMinus = y - 1
    let yPlus = y + 1
    return [
      [xMinus, yMinus],
      [xMinus, y],
      [xMinus, yPlus],
      [x, yMinus],
      [x, yPlus],
      [xPlus, yMinus],
      [xPlus, y],
      [xPlus, yPlus]
    ]
}