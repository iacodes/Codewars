// function last(x){
//   let arr = x.split(" ")
//   console.log(`The words are ${arr}`)
//   let reversed = []
//   for (i = 0; i<arr.length; i++){
//     console.log(arr[i])
//     reversed.push(arr[i].split("").reverse().join(""))
//   }
//     console.log(`The reverse array is ${reversed}`)
//   reversed.sort( (a,b) => a-b)
// console.log(`The reverse sorted array is ${reversed.sort()}`)
//   let sortedArr = []
//   for (i = 0; i<reversed.length; i++){
//     console.log(reversed[i])
//     sortedArr.push(reversed[i].split("").reverse().join(""))
//   }
//   return sortedArr
// }


//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
//If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

function last(x){
  y=x.split(" ")

  function endComparator(a,b) {
    if (a.slice(-1) < b.slice(-1)) return -1;
    if (a.slice(-1) > b.slice(-1)) return 1;
    return 0;
  }
  return y.sort(endComparator)
}


//Other solutions
/*
function last(x){
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
const last = x =>
  x.split(` `).sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));

*/
