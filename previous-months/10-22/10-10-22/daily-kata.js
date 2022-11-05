//All Inclusive?
//
//Input: 
//
//a string strng
//an array of strings arr
//
//Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
//
//a boolean true if all rotations of strng are included in arr
//false otherwise
//
//Examples:
//contain_all_rots(
//  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
//
//contain_all_rots(
//  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
//
//Note:
//Though not correct in a mathematical sense
//
//we will consider that there are no rotations of strng == ""
//and for any array arr: contain_all_rots("", arr) --> true
//
//Ref: https://en.wikipedia.org/wiki/String_(computer_science)#Rotations

function containAllRots(strng, arr) {
    let rotList = []
    for (let i = 0; i < strng.length; i++){
      let output = strng.split('')
      let j = 0
      while (j < i){
        let lastChar = output.pop()
        output.unshift(lastChar)
        j++
      }
      rotList.push(output.join(''))
    }
    
    for (let i = 0; i < rotList.length; i++){
      if (!arr.includes(rotList[i])){
        return false
      }
    }
    return true
}