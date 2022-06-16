/*Given a number n, return the number of positive odd numbers below n */

function oddCount(n){
  return (n%2!=0 ? Math.floor(n/2) : n/2)
}
