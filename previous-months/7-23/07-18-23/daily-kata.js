//Convert Hash To An Array
//
//Convert a hash into an array. Nothing more, Nothing less.
//{name: 'Jeremy', age: 24, role: 'Software Engineer'}
//
//should be converted into
//[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
//
//Good Luck!

function convertHashToArray(hash){
    let  output = []
    for (let prop in hash) {
      output.push([prop, hash[prop]])
    }
    output.sort((a, b) => {
        return a[0] < b[0] ? -1 : 1
    })
    return output
  }