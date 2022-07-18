/*
//Not funcitoning solution


function nextItem(xs, item){
  let finalValue = undefined

    if (i === item) {
      if (i == xs.length-1 || i+1 > xs.length-1  ){
        return finalValue
      }
      else return xs[i+1]

    }
  }
*/


function nextItem(xs, item){
  let found = false
  let finalValue

  for (const i of xs) {
    if (found) {
      finalValue = i
      break
    }

    if (i === item) found = true
  }

  return finalValue
}

/*
//Alternative solutions
function nextItem(xs, item) {
  var found = false;
  for (var x of xs) {
    if (found) return x;
    if (x == item) found = true;
  }
  return undefined;
}

*/
