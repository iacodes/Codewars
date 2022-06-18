/*
Your task is to give the number of total values for the odd terms of the sequence up to the n-th term (included). (The number n (of n-th term) will be given as a positive integer)

The values 1 (one) is the only that is duplicated in the sequence and should be counted only once.

f(0) = 0
f(1) = 1
f(2) = 1
f(3) = 2
f(4) = 4;
f(n) = f(n-1) + f(n-2) + f(n-3) + f(n-4) + f(n-5);

count_odd_pentaFib(10) ------> 3 #because the odds terms are: [1, 1, 31, 61] (three different values)

count_odd_pentaFib(15) ------> 5 # beacause the odd terms are: [1, 1, 31, 61, 1793, 3525] (five different values)
*/

function countOddPentaFib(n) {
  let count = Math.floor(n/6)*2-1

  if (n%6==1){
    count+= 1
  }
  else if (n%6==2 || n%6==3 ||n%6==4 || n%6== 5){
    count+= 2
  }
  
  return count
}

/*function countOddPentaFib(n) {
  let count = 0
  let rem = (n)%6
  
  if (n == 0){
    return 0
  }

  if (rem ==0){
    count = (n-rem)/3-1
  }
  else if (rem == 1){
    count = (n-rem)/3+1-1
  }
 else {
    count = (n-rem)/3+2-1
 } 
  return count
}

//Another alternative solution
function countOddPentaFib(n) {
  let count = 1
  for (let i = 3; i <= n; i++)
    if (i % 6 == 1 || i % 6 == 2) count++
  return count
}
*/
