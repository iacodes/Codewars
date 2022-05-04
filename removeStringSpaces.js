//Simple, remove the spaces from the string, then return the resultant string.


// function noSpace(x){
//   return x.replaceAll(" ","")
// } //fails the test, however on local browser it appears to work

//submitted solution
function noSpace(x){
  let strArr= x.split("") //splits the string into an array
  let noSpaceArr = []

  //checks if character is a space or not, if not then it is pushed to noSpaceArr array
  strArr.forEach(x=> {
    if (x !==" "){
      noSpaceArr.push(x)
    }
  })

  //converts the array that has no spaces into a string
  return noSpaceArr.join("")
}
