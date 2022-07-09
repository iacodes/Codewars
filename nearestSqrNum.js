/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

function nearestSq(n){
  let num = Math.sqrt(n)
  return    n-Math.floor(num)**2 < Math.ceil(num)**2-n ? Math.floor(num)**2 : Math.ceil(num) **2
}


/*Other solutions

function nearestSq(n){
    return Math.round(n**0.5)**2
}

*/
