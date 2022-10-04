/*
You are given a message (text) that you choose to read in a mirror. Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.

*/

function mirror(text){
  let mirroredText = []

  let splitText = text.split(" ")
  let numberOfStars = Math.max(...splitText.map(x => x.length))
  let starsBeginEnd = []

    console.log(splitText)

  for(i = 1; i <= numberOfStars; i++){
    starsBeginEnd.push("*")
    if (i==numberOfStars){
      starsBeginEnd.push("\n")
    }
    starsBeginEnd.join("")
  }
    mirroredText.push(starsBeginEnd.join(""))
console.log(mirroredText)

  for (i=0; i< text.length; i++){
    mirroredText.push("*")
      let arr = splitText[i]
      console.log(arr)
    // mirroredText.push(arr.split("").reverse().join(""))
    mirroredText.push("* \n")
  }

    console.log(mirroredText)

  // // mirroredText.push(starsBeginEnd)


  // // return mirroredText.join("")

}
