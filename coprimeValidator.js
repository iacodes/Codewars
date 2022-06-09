/*
Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.
*/

function isCoprime(x, y) {
  //Takes in two numbers x and y


  // step 1 find all numbers that are divisible from 1 to x
  // step 2 put number in list if divisible and leaves no remainder
  let xFactors = []
  for (i = 1; i <= x; i++){
    if (x%i==0){
      xFactors.push(i)
    }
  }
  console.log(xFactors)

  //debug >>>>>>>>>>>>>>>>>>>>
  // let yFactors = []
  // for (i = 1; i <= y; i++){
  //   if (y%i==0){
  //     yFactors.push(i)
  //   }
  // }
  // console.log(yFactors)

  //end of debug <<<<<<<<<<<<<<<<


  // step 3 find all numbers that are divisible from 1 to y
  // step 4 put number in list if divisible and leaves no remainder
  // step 5 compare if any number from step 3 is already in step 1

  for (i = 1; i <= y; i++){
    if (y%i==0 && xFactors.includes(i) && i!=1){
      return false
    }
  }

  //return true if coprime, else false
  return true
}

isCoprime(20, 27) //returns true

/*
20 and 27:

Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime

*/


isCoprime(12, 39) //returns false
/*
12 and 39:

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprimes
*/


/* Other solutions
function isCoprime(x, y) {
  const min = Math.min(x, y);

  for (let i = 2; i <= min; i++) {
    if (x % i === 0 && y % i === 0) {
      return false;
    }
  }


  return true;
}
*/
