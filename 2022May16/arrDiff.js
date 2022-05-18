/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

//function call with both arrA and arrB
function arrayDiff(arrA,arrB){
  //create arr empty to store result
  let arr = []
  //compareA to B and add any element not in B to array to store result
  arrA.forEach(x => {
     if (arrB.includes(x)==false){
        arr.push(x)
      }
      // if (arr.includes(x)==false){}
  //compareB to array to store result

  //return single arr with only unique elements
  return arr
}


  /* //Initial code, however failing test so attempt below
  arrA.forEach(x => {
    if (arr.includes(x)==false && arrB.includes(x)==false){
        arr.push(x)
        return arr
      }
  })

  if (b.includes(x)==false){
       arr.push(x)
   }
  //compareB to array to store result
  //return single arr with only unique elements
  return arr

  */


}
