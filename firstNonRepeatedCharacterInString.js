/*
You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

You can assume, that the input string has always non-zero length.

Examples
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated)
*/

// Initial Attempt
// function firstNonRepeated(s) {
//   let wordArray = s.split("")
//   for (i=0; i<wordArray.length;i++){
//     for (j=i+1; j<wordArray.length-i-1;j++){
//       if ((wordArray.slice[j]).includes(wordArray[i])==-1){
//         return wordArray[i]
//       }
//     }
//   }
//   return null
// }

function firstNonRepeated(s) {
  let letters = s.split("")


  let checkedLetters = []


  for (i=0; i<letters.length;i++){
    //includes returns true or false, not -1 which may be confused with result of indexOf method.
    if (letters.includes(letters[i],i+1)==true){
      checkedLetters.push(letters[i])

    }
    else if (letters.includes(letters[i],i+1)== false && checkedLetters.includes(letters[i])==false){
      return letters[i]
    }
  }

  return null
}
