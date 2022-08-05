/*
Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.
*/

function maxProduct(numbers, size){
  numbers.sort((a,b)=> b-a)
  let product = 1

  for (i=0; i<size; i++){
    product*=numbers[i]
  }
  return product
}
