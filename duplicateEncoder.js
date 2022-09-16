/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

function checkRestOfArr(remainingArray, checkedElement){
  if (remainingArray.includes(checkedElement)){
    return true
  }
  return false
}

function duplicateEncoder(str){
  let lowerCaseStrArr = str.toLowerCase().split("")
  let encodedStr = []

  lowerCaseStrArr.forEach((x,i,a) => {
    if (checkRestOfArr(a.slice(0, i), x) || checkRestOfArr(a.slice(i+1) , x) ){
      encodedStr.push(")")
    }
    else{
      encodedStr.push("(")
    }
  })

  return encodedStr.join("")
}
