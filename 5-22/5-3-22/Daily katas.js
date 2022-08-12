// String Templates - Bug Fixing #5
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

//   Simple validation of a username with regex
//   Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
    return /^[0-9a-z_]{4,16}$/.test(username)
  }