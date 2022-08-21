/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

*/

function adjacentElementsProduct(array) {
    let newArr = []
    array.forEach((x,i,a) => {
        if (i <= array.length){
            newArr.push(x*a[i+1])
        }
        return newArr
    })
   newArr.sort((a,b) => b-a)
  return newArr[0]
}
