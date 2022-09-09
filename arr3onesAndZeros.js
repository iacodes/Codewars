/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

const binaryArrayToNumber = arr => {
  let exp = arr.length - 1
  let sum = 0
  for (i = 0; i < arr.length; i++){
    sum += arr[i]*(2**exp)
    exp--
  }
  return sum
};


/*Other solutions

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);



function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}
*/
