//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
 let vowels = ["a","e","i","o","u"]
    let output= []
string.split("").forEach((x,i,a) => {if (vowels.includes(x) == false){
    output.push(x)
    }
})

    return output.join("")

}


/*Alternative solutions

function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1
  }).join('')
}

*/
