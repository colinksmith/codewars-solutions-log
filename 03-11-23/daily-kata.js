//makeBackronym
//
//back·ro·nym
//
//An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.
//"Biodiversity Serving Our Nation", or BISON
//
//(from https://en.oxforddictionaries.com/definition/backronym)
//Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).
//The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:
//dict["P"] == "perfect"
//
//Examples
//"dgm" ==> "disturbing gregarious mustache"
//
//"lkj" ==> "literal klingon joke"
//

//preload variable: dict

var makeBackronym = function(string){
    return string.split('')
      .map(letter => {
        return dict[letter.toUpperCase()]
      })
      .join(' ')
    
  };