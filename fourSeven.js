/*Four Seven
Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).
*/

function fourSeven(n){
  let obj = {
    "4":"7",
    "7":"4"
  }
  return obj[n] ||  0
}


/*Other solutions
function fourSeven(n){
  return {7:4, 4:7}[n] | 0
}

function fourSeven(n) {
  while ( n===4 )
    return 7;
  while ( n===7 )
    return 4;
  return 0;
}

const fourSeven = n => n===4 && 7 || n===7 && 4 || 0 ;

*/
