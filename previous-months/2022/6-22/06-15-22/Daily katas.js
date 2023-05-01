// Hello, Name or World!
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name = 'world') {
    const firstLetter = name.slice(0, 1).toUpperCase()
    const otherLetter = name.slice(1).toLowerCase()
    const sanitizedName = firstLetter + otherLetter
    return `Hello, ${sanitizedName || 'World'}!`
}