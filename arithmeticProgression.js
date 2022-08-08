/*
write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.
*/

function arithmeticSequenceElements(a, d, n) {
  let arr = []
  let num = a
  for ( i = 0; i < n; i++){
    arr.push(num)
    num+=d
  }

	return arr.join(", ");
}
