/*Return a new array consisting of elements which are multiple of their own index in input array (length > 1). */


function multipleOfIndex(array) {
  let returnArr = []
  array.map((x,i) => {if (x%i ==0){
    returnArr.push(x)
    return returnArr
  }})
  return returnArr
}


/*Other solutions
function multipleOfIndex(array) {
  return array.filter((num, i) => num % i === 0);
}
*/
