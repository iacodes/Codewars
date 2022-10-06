/*Simple function to double any letters that appear more that once*/


function doubleChar(inputString){
  let outputString = []

  inputString.split("").forEach((x,i,a) => {
    if (x==a[i+1]){
      outputString.push(x)
      outputString.push(x)
    }
    outputString.push(x)
    return outputString
  })

  return outputString.join("")
}
