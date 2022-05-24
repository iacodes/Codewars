/*Your task is to sum the differences between consecutive pairs in the array in descending order.
[2, 1, 10]  -->  9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).
*/

function sumOfDifferences(arr) {
  let sum=0
  let newArr = arr.sort((a,b)=>b-a)
  newArr.forEach(
      (item, i) => {if (i != arr.length-1 ){ sum += item-arr[i+1]
      return sum}})
  return sum;

}


//return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0; 
