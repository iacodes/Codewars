/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.

*/

function inArray(array1,array2){
  array2.sort((a,b)=> a-b)

  array1.sort()
  // array1.sort((a,b)=>a-b) //Orginally used this line. However commented out because for string don't need to include the (a,b)=> a-b

  let arrReturn = []

  for (i = 0; i< array2.length; i++){
    let included = false;
    array2.forEach(x => {
      if (included == false && x.includes(array1[i])){
        included = true
        return included
      }
      else {
        return included
      }
    })
    if (included){
      arrReturn.push(array1[i])
    }
  }
  return arrReturn
}


/*
Other solutions
function inArray(array1,array2){
    return array1.filter(function(value){return (array2.join('-').indexOf(value))!=-1}).sort();
}

function inArray(array1, array2) {
  return array1.filter(function(word) {
    return array2.join(' ').includes(word);
  }).sort();
}


const inArray = (arr1,arr2) =>
  arr1.filter(substr =>
    arr2.some(str =>
      str.includes(substr)
  ))
  .sort()


*/
