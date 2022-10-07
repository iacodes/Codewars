/*
Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.
*/


function removeNthChar(str, num){
    let arr = str.split("")
    if (str.length > 0){
        for (i=0; i< arr.length; i++){
            if (i>0 && i%(num-1)==0){
                arr.splice(i,1)
            }
        }
    }

  let returnStr = arr.join("")
  return returnStr
}
