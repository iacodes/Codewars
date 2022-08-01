/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/


//initial commit
// var orderedCount = function (text) {
//   let countOfChar = {}
//   let arr = text.split("")
//     arr.forEach(x => {
//     if (countOfChar.hasOwnProperty(x)){
//       countOfChar[x]=1
//     }
//     else{
//       countOfChar[x]+=1
//     }
//     return countOfChar
//   })
//   return countOfChar;
// }

var orderedCount = function (text) {
  let countOfChar = {}
  let arr = text.split("")

  let char = []

  arr.forEach((x,i) => {
    if (char.includes(x)){
      let j = char.indexOf(x)
        //console.log(`the character ${x} is in char at position ${j} `)
      char[j+1]+=1
    }
    else {
      char.push(x)
      char.push(1)
     }
    return char
  })
    console.log(char)
    let arrReturn = []
    for (i = 0;  i < char.length;  i++){
        if (i%2==0){
            arrReturn.push([char[i], char[i+1]])
        }
    }
  return arrReturn
}

/*
Alternative clever solutions

const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));


var orderedCount = function (text) {
  return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);
}
*/
