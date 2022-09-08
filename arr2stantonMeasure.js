/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array

  The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

  Write a function which takes an integer array and returns its Stanton measure.

*/

function stantonMeasure(intArray){
  let count = 0

  let numOfOne = countNumber(intArray, 1)
  return countNumber(intArray, numOfOne)
}

function countNumber(array, number){
  let count = 0
  array.forEach(x => {
    if (x == number){
      count++
    }
    return count
  })
  return count
}
