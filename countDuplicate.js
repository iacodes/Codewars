/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
*/

function duplicateCount(text){
  let uniqueArr = []
  let duplicateArr = []
    let countDuplicateArr = []
  text.toLowerCase().split("").forEach(x => {
        if(uniqueArr.includes(x)==false){
            uniqueArr.push(x)
        }
        else {
          duplicateArr.push(x)
      }
  })
 duplicateArr.forEach( (x,i) => {
     if ( countDuplicateArr.includes(x) == false){
         countDuplicateArr.push(x)
     }
} )

  return countDuplicateArr.length
}
