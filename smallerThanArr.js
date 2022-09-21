/*
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.


For example:
* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version
*/

function smallerThanArrayElement(arr){
  let arrReturn = []

  arr.forEach((x,i) => {
    let count = 0
    for (j=i; j<arr.length; j++){
      if (x > arr[j]){
        count++
      }
    }
    arrReturn.push(count)
    return arrReturn
  })

  return arrReturn
}
