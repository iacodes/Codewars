//A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

function isAllPossibilities(x){
  if (x.length == 0){
    return false
  }

  for (i = 0; i <= x.length-1; i++){
    if (x.includes(i) == true){
      continue
    }
    else {return false}
  }
  return true;
}


/*
Other solutions
function isAllPossibilities(x){
  return x.length > 0 ? x.every((a,i) => x.includes(i)) : false;
}

unction isAllPossibilities(array) {
  const [first, ...rest] = array.slice().sort();
  return first === 0 && rest.every((n, i) => n === i + 1);
}


function isAllPossibilities(x){
  let tally = 0;
  if (x.length >= 1) {
    for (let i = 0; i < x.length; i++) {
      if (x.includes(i)){
      tally++;
      }
    }
    return tally === x.length
  } else return false;

*/
