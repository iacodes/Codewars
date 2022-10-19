/*
Be Concise IV - Index of an element in an array
Task
Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.
*/

/*
Initial funciton
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}
*/

/*initial attempt
function find(array, element) {
  let returnIndex = array.forEach((x,i) => {
    if (x == element){
      return i
    }
    return false
  })

  return returnIndex ? returnIndex  : "Not found"

}
*/


function find(array, element) {
  return array.indexOf(element) > 0 ? array.indexOf(element)  : "Not found";
}
