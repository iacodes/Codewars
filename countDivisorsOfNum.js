//Count the number of divisors of a positive integer n

function getDivisorsCnt(n){
  let numOfDivisors = 0
  for(i = 1; i <= n; i++){
    if (n%i == 0){
      numOfDivisors++
    }
  }
  return numOfDivisors
  }
