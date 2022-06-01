// You Can't Code Under Pressure #1
// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    return i * 2;
}

// Grasshopper - Personalized Message
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
function greet (name, owner) {
    if (name === owner) {
        return "Hello boss"
    }
    return "Hello guest"
}