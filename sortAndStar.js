/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

function twoSort(s) {
  //return s.sort((a,b)=> a-b)[0].split("").map((x,i,a) => { //for sorting array of strings, sort method can be used alone.
  return s.sort()[0].split("").map((x,i,a) => {
      if (i < a.length-1){
          return x+"***"
      }
      else {
          return x
      }
  }).join("")
}


/*Alternative solutions
const twoSort = s =>  s.sort()[0].split('').join('***');
*/
