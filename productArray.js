/*
Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
*/

function productArray(numbers){
  return numbers.map((x,i,a) => {
    let num = 1
    for (let j = 0; j< a.length; j++){
      if (j!=i){
        num*=a[j]
      }
    }
    return num
  })
}
