/*You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

*/

function countingValleys(s) {
  let arr = s.split("")
    console.log(arr)
  let currentLevel = 0
    let level = []
    let levelCounter = 0
  let count = 0

  for (i = 0; i<= arr.length-1; i++){
    if ( arr[i] === "U"){
      currentLevel++
    }
    else if (arr[i] === "D"){
      currentLevel--
    }
    else{
      continue
    }
    level

      level.push(currentLevel)
      levelCounter++
      console.log(level)
      console.log(levelCounter)
    if (level[levelCounter-2] === -1 && currentLevel === 0){
      count++
    }
  }
  return count
}


/*
Other solutions

function countingValleys(s) {
  //here we go again
  let level=0;
  let valleys = 0;
  s.split("").forEach(el=>{
    if(level===-1&&el==="U") valleys++;
    if(el==="D") level-=1;
    if(el==="U") level+=1;
  })
  return valleys;
}

function countingValleys(s) {
  let [lvl, val] = [0, 0];

  for ( let i of s ){
    if ( i === 'U' ){
      if ( (lvl += 1) === 0 ){
        val += 1;
      }
    }else if ( i === 'D' ){
      lvl -= 1;
    }
  }
  return val;
}
*/
