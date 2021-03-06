/*
Given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

function highAndLow(numbers){
  let arrPos = []
  let arrNeg = []

  numbers.split(" ").sort((a,b)=> a-b).forEach(x => {
    if (x>0){
      arrPos.push(x)
    }
    if (x<=0){
      arrNeg.unshift(x)
    }

    return arrPos,arrNeg
  })
  let result = arrNeg.reverse().concat(arrPos)

  return `${result[result.length-1]} ${result[0]}`
}


/*
//Initial solution. Issue with some test cases
function highAndLow(numbers){
  let arrPos = []
  let arrNeg = []
  let result = []

  numbers.split(" ").forEach(x => {
    if (x > 0){
      return arrPos.push(x)
    }
    if (x <= 0 ){
      return arrNeg.push(x)
    }
  })
  arrPos.sort((a,b) => a-b)


  if (arrNeg.length != 0){
    arrNeg.sort((a,b) => a-b)
    result.unshift(arrNeg[0])
  }
  else result.unshift(arrPos[0])

  result.unshift(arrPos[arrPos.length-1])

  return result.join(" ")
}

*/

/*Alternative solutions
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
*/
