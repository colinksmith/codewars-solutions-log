// Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('!').join('')
}

// Twice as old
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let ageDifference = dadYearsOld - sonYearsOld
    return Math.abs(ageDifference - sonYearsOld)
}