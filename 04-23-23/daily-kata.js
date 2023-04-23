//Interactive Dictionary
//
//In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:
//>>> d = Dictionary()
//
//>>> d.newentry('Apple', 'A fruit that grows on trees')
//
//>>> print(d.look('Apple'))
//A fruit that grows on trees
//
//>>> print(d.look('Banana'))
//Can't find entry for Banana
//
//Good luck and happy coding!

class Dictionary {
    constructor() {
      this.list = {}
    }
    
    newEntry(key, value) {
      this.list[key] = value
    }
    
    look(key) {
      if (this.list[key]) return this.list[key]
      return `Can't find entry for ${key}`
    }
  }