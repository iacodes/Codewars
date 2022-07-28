// function to only return number of numbers in an array
//function sumMix(x){
//   return x.filter(x => typeof(x) === "number").reduce((acc,item) => +acc+ +item, acc=0)
// }


/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
  return x.reduce((acc,item) => +acc+ +item, acc=0)
}


/*Alternative solutions

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}
*/
