/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/


function findShort(s){
  let shortestWord = ""
  s.split(" ").forEach( x=> {
    if (shortestWord.length < x.length) {
      shortestWord == x
    }
  })
  return shortestWord
}
