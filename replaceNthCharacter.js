/*
Write a method, that replaces every nth char oldValue with char newValue.

Inputs
text: the string to modify
n: change the target letter every nth occurrencies
old_value (or similar): the targetted character
new_value (or similar): the character to use as replacement
Note for untyped languages: all inputs are always valid and of their expected type.

Rules
Your method has to be case sensitive!
If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
*/


function replaceNth(text, n, oldValue, newValue) {
  let occ = 1;

  if (n <= 0){
    return text
  }
  let countofOldValue = text.split("").map((x,i)=> text[i]===oldValue).length

  if (n > countofOldValue){
    return text
  }


  return text.split("").map(x => {
    if (x === oldValue){
       if (occ%n==0){
         x=newValue;
       }
      occ++
    }
    return x
  }).join("")
}
