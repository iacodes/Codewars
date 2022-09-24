/*
You are given a message (text) that you choose to read in a mirror. Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.

*/

function mirror(text){
  let mirroredText = []

  for (i=0; i< text.length; i++){
    mirroredText.push("*")
  }
  

  return mirroredText.join("")
}
