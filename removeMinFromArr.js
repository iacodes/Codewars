/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
*/

function removeSmallest(numbers) {
  //throw "TODO: removeSmallest";
  let smallest = Math.min(...numbers)

  for (i = 0; i< numbers.length; i++){
     if (numbers[i] == smallest){

          numbers.splice(i, 1);
         console.log()
         break

    }
  }
  return numbers
}
