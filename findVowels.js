/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

*/


function vowelIndices(word){
    let indexes = ""
    indexes = word.toLowerCase().split("").map((item, indexNo) => {
    if (item=="a" || item=="e" || item=="i" || item=="u" || item=="o" || item=="y") {return indexNo+1}
  })
return indexes.filter(item => item !== undefined)
}



/*
Other solutions
function vowelIndices(word) {
  var arr = [];
  for(var i = 0; i < word.length; i++) {
    if(/[aeioyu]/i.test(word[i])) {
      arr.push(i+1);
    }
  }
  return arr;


  Or
  function vowelIndices(word,a=[]){
    return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
  }
*/
