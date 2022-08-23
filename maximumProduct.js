/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

*/

function adjacentElementsProduct(array) {
    let newArr = []
    array.forEach((x,i,a) => {
        if (i < array.length-1){
            newArr.push(x*a[i+1])
        }
        return newArr
    })
   newArr.sort((a,b) => b-a)
   //.filter( x=> x == x+1-1 )
  return newArr[0]
}


/*Other solutions
function adjacentElementsProduct(a) {
  return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
}


function adjacentElementsProduct(array) {
  let newArr = []
  for(i=0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
  }
  return Math.max(...newArr)
}

*/
