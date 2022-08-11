/*
Create a function that takes an array of letters, and combines them into words in a sentence.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).
*/


function arrAdder(arr) {
  let arrLength = arr.length
  let loopLength = arr[0].length
  let result = []

  for (i=0; i<loopLength ; i++){
    for (j=0; j <arrLength; j++){
      if (arr[j][i] == ""){
        continue
      }
      else result.push(arr[j][i])
    }
    result.push(" ")
  }
  return result.slice(0,-1).join("")
}

/*
Other solutions
function arrAdder(arr) {
  var res = '';
  for (var i = 0; i < arr[0].length; i++) {
    for (var j = 0; j < arr.length; j++) {
      res += arr[j][i];
    }
    res += ' ';
  }
  return res.trim();
}

const arrAdder = arr =>  arr[0].map((_,i)=>  arr.map((_,j)=> arr[j][i]).join('')).join(' ');
*/
