/*Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array*/

function countBy(x, n) {
  let z = [];
  for (i = x ; i<=n ; i+=x ){
    console.log(i)
    z.push(x)
  }
  return z;
}

/*
other solutions
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

*/
