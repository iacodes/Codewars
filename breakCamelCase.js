//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  let words = []
  string.split("").forEach(x => {
      if(x.toUpperCase() == x){
          words.push(" ")
      }
      words.push(x)
    return words
  })
  return words.join("")
}



/*Alternative solution
//using regular expression
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}


function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}

*/
