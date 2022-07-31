/*
Task is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s)
{
  let middleStr = (s.split("").length -1 )/2
  return middleStr%1==0 ? s[middleStr]:`${s[Math.floor(middleStr)]}${s[Math.ceil(middleStr)]}`
}
