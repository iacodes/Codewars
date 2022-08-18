// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons){
  let arr = []
  let loopMax = buttons.length-1
  let element = 0
  while (loopMax >= 0){
//       console.log(`Loop Max is ${loopMax} with value ${buttons[loopMax]}`)
//       console.log(`Loop Max is ${loopMax-1} with value ${buttons[loopMax-1]}`)
    if (buttons[loopMax]!=buttons[loopMax-1]){
        arr.push(buttons[loopMax])
//         console.log(`There are ${arr.length} in a row`)
      break
    }
    arr.push(buttons[loopMax])
    loopMax--
  }
//  console.log(`The array is ${arr} for items at the end in a row`)
  return arr.length%2==0 ? "Nothing" : buttons.length==0 ? "Nothing" : buttons[buttons.length-1]
}

/*Alternative solutions
function likeOrDislike(buttons) {
  let res = 'Nothing'
  for (let i = 0; i < buttons.length; i++){
    if (buttons[i] === res) {
      res = 'Nothing'
    } else {
      res = buttons[i]
    }

  }
  return res
}


const likeOrDislike = buttons =>
buttons.reduce((prev,cont)=> cont == prev ? Nothing : cont,Nothing)


*/
