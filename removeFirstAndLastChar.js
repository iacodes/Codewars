/*
Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
 return str.split("").slice(1,-1).join("")
};


/*Other solutions
function removeChar(str) {
  return str.slice(1, -1);
}


function removeChar(str){
 return str.substring(1, str.length-1);
};
*/
