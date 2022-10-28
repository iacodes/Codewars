/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.
*/

/*
function validParentheses(parentStr) {
  let parentStrArray = parentStr.split("")

  if (parentStrArray.length %2 != 0){
      console.log("There is are an odd number of brackets")
    return false
  }

  if (parentStrArray[0] == ")" ){
      console.log("there is an ) without opening brackets")
    return false
  }

  if (parentStrArray.length == 0){
    return true
  }

  if ( parentStrArray.length==2 && parentStrArray[0] == "(" && parentStrArray[1]==")"){
      console.log("Last two check if true")
      console.log("true")
    return true
  }
  else if (parentStrArray.length==2 && parentStrArray[0] != "(" && parentStrArray[1]!=")"){
    return false

      //this has to be else if "(with parentStrArray.length==2)" otherwise false false
  }

  for (i=0; i<=parentStrArray.length; i++){
    if ( parentStrArray[i] == "(" && parentStrArray[i+1]==")"){
      parentStrArray.splice(i,2)
          console.log("Recursion!!")
      validParentheses(parentStrArray.join(""))
    }

  }
}

*/

function validParentheses(parentStr) {
  let parentStrArray = parentStr.split("")

  if (parentStrArray.length %2 != 0){
    return false
  }

  if (parentStrArray[0] == ")" ){
    return false
  }


  if ( parentStrArray.length==2 && parentStrArray[0] == "(" && parentStrArray[1]==")"){
    console.log(`the first element is ${parentStrArray[0]} which the same as in quotes "(", the first second is ${parentStrArray[1]} which the same as in quotes ")" and the array length is ${parentStrArray.length} so return true`)
      return true
  }
  else if (parentStrArray.length==2 && parentStrArray[0] != "(" && parentStrArray[1]!=")"){
    console.log(`the first element is ${parentStrArray[0]} which the same as in quotes ")", the first second is ${parentStrArray[1]} which the same as in quotes "(" while the array length is ${parentStrArray.length} so return false`
    return false
  }

  for (i=0; i<=parentStrArray.length; i++){
    if ( parentStrArray[i] == "(" && parentStrArray[i+1]==")"){
      parentStrArray.splice(i,2)
          console.log("Recursion!!")
      validParentheses(parentStrArray.join(""))
    }

  }
}
