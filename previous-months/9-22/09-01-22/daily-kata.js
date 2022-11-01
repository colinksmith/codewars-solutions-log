//Remove anchor from URL
//
//Complete the function/method so that it returns the url with anything after the anchor (#) removed. 
//Examples
//"www.codewars.com#about" --> "www.codewars.com"
//"www.codewars.com?page=1" -->"www.codewars.com?page=1"
//

function removeUrlAnchor(url){
    // TODO: complete
    let urls = url.split('#')
    return urls[0]
  }
  