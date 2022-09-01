/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str){
  let uniqueLetters = []
  let status = true
  str.toLowerCase().split("").forEach(x => {
    if (uniqueLetters.includes(x) == false){
      uniqueLetters.push(x)
    }
    else{
      status = false
    }
  })
  return status
}


/*
Other solutions
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}


function isIsogram(str) {
  return !str || str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
}


function isIsogram(str){
  //...
  var arr=Array.from(new Set([...str.toLowerCase()]))
  return arr.length===str.length
}

*/
