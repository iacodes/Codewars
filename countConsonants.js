//Complete the function that takes a string of English-language text and returns the number of consonants in the string.
//Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
  let count = 0
  let consonants = ["a","e","i","o","u"]
  str.split("").forEach(x => {
    return consonants.includes(x) ? count++ : count
  })
  return count
}
