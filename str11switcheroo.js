/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/



function switcheroo(x){
  let letters = {
    "a":"b",
    "b":"a"
  }
  return x.split("").map(x => { return x == "a" || x=="b" ? letters[x] : x}).join("")
}


/*
Other solutions
const switcheroo = x => x.replace(/[ab]/gi, match => match === 'a' ? 'b' : 'a');

function switcheroo(x){
  return [...x].map(v => v == 'a' ? v = 'b' : v == 'b' ? v = 'a' : v).join('');
}

*/
