/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/
function squareOrSquareRoot(array) {
  let newArr = []

  array.forEach(x=>{
    if((Math.sqrt(x)%1)==0){
      return newArr.push(Math.sqrt(x))
    }
    else {
      return newArr.push(x**2)
    }
  })
  return newArr;
}

/*
function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });
}
*/

//const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));
