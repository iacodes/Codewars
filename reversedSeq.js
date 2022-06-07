// Build a function that returns an array of integers from n to 1 where n>0.


const reverseSeq = n => {
  let arr = []
  for (i=n; i>0; i--){
    arr.push(i)
  }
  return arr;
};


/*const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
}; */
