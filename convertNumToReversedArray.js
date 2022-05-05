/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example
348597 => [7,9,5,8,4,3]
0 => [0]

*/


//[ '1', '3', '2', '5', '3' ] to deeply equal [ 1, 3, 2, 5, 3 ]
// function digitize(n){
//   if (typeof(n) == "string" || typeof(n) == "number") {
//     return n.toString().split("").reverse()
//   }
//   else if (typeof(n) == "object") {
//     return n.reverse()
//   }
// }

function digitize(n){
  let arr =n.toString().split("").reverse()
  return arr.map(x => Number(x))
}
