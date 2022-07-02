/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
*/

function removeSmallest(numbers) {
  //throw "TODO: removeSmallest";
  let smallest = Math.min(...numbers)

  let newArr = numbers.map(x => x)

  for (i = 0; i< newArr.length; i++){
     if (newArr[i] == smallest){

          newArr.splice(i, 1);
         break

    }
  }
return newArr
}


/*Alternative solutions
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}



function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

 */
