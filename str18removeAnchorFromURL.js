/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
*/

function removeUrlAnchor(url){

  return url.slice(0,(url.includes("#") ? url.indexOf("#") : url.length))
}


/*
Other solutions

function removeUrlAnchor(url){
  return url.split('#')[0];
}


function removeUrlAnchor(url){
  let string = ""
  for(let i = 0; i < url.length; i++){
    if(url[i] === "#") { break }
    string += url[i]
  }
  return string
}
*/
