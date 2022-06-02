// function dropWhile(arr, pred) {
//   longestSeq = []
//   testSeq = []
//   for (i=0;  arr.length -1 ; i++ ){
//     j=i
//     whle (pred(x)==true && j<arr.length -1){
//       testSeq.push(x)
//       j++
//     }
//     if (testSeq.length > longestSeq.test){
//        longestSeq.test = testSeq.length
//     }
//   }
//   return
// }

/*
You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.
*/


function dropWhile(arr, pred) {
  let i = 0

  while (pred(arr[i])==true){
   i++
  }
  return arr.slice(i)
}
