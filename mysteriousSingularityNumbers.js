/*
Try to solve it using logic. The shortest solution can be fit into one line.

Task
The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].


*/
function realNumbers(n){
  let arr=[]
  for (i=1; i<n; i++){
    if (i%2!=0 && i%3!=0 && i%5!=0){
      arr.push(i)
    }
  }
  return arr.length
}
