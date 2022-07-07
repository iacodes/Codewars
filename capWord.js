//Fix the function so that it works as intended (i.e. make the first character in the string "word" upper case).

function capitalizeWord(word) {
  return word[0].toUpperCase().concat(word.slice(1));
}
