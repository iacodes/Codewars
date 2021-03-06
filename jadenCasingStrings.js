/*Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/

String.prototype.toJadenCase = function() {
  let words = this.split(' ')  //what was missing here was the this. This is how the string is passed and not as a parameter in function
  let jadenized = []
  words.forEach(word => {
    let newWord = word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()
    jadenized.push(newWord)
  })

  return jadenized.join(" ")
}


// //The function below works. Need to convert to extend string class / add new string method
// function jaden(str){
//   let words = str.split(' ')
//   console.log(words)
//   let jadenized = []
//   words.forEach(word => {
//     let newWord = word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()
//     jadenized.push(newWord)
//   })
//
//   return jadenized.join(" ")
// };
