/*
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
*/

function minValue(values){
//   let stringVal = String(values).split("")
  let smallestArr = []
//   stringVal
    values.sort((a,b)=> a-b).forEach((x,i,a) => {
    if (i==0){
      smallestArr.push(x)
    }
    else if (x != a[i-1]){
      smallestArr.push(x)
    }
    return smallestArr
  })
  return Number(smallestArr.join(""))

}


/*
function minValue(values){
  let arr = Array.from(new Set(values))
  return parseInt(arr.sort().join(''))
}
*/
