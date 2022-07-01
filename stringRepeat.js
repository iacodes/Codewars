// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
    let y = ""
    for (i=0; i< n; i++){
        y +=s
    }
    return y
}

//recursive function attempt - does not work on tests
/*
let y = ""
function repeatStr (n, s) {
  if(n > 0){
    y +=s
    console.log(y)
    repeatStr (n-1, s)
  };
    return y
}
*/
