/*
Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings.
*/


function olympicRing(a){
  console.log(a)
  let conversion = {
    "A":1,
    "a":1,
    "B":2,
    "b":1,
    "D":1,
    "d":1,
    "e":1,
    "g":1,
    "O":1,
    "o":1,
    "P":1,
    "p":1,
    "Q":1,
    "q":1,
    "R":1
  }
  let countMedals = 0;
  let arr = a.split("")
  arr.forEach( x => { if (conversion[x] != null){ //
    //arr.forEach( x => { if (conversion[x]==true) //initially using this function which had a bug because for 2; conversion was not true / 1
//     console.log(`Count medals is now ${countMedals}`)
    countMedals+= conversion[x]
//     console.log(`${x} is conversion[x]`)
    return countMedals
  }})
  console.log(`${Math.floor(countMedals/2)} medals`)
  return Math.floor(countMedals/2) <=1 ? 'Not even a medal!' : Math.floor(countMedals/2) == 2 ? 'Bronze!' : Math.floor(countMedals/2) == 3 ?  'Silver!' : "Gold!"
}
