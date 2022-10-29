/*When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

*/

function swap (string) {
  let vowelCapital ={
    "a":"A",
    "e":"E",
    "i":"I",
    "o":"O",
    "u":"U"
  }
  return string.split("").map(x=> {
    if (x in vowelCapital){
      return vowelCapital[x]
    }
    else {
      return x
    }
  });
}
