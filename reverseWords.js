function reverseWords(str) {
    let words = str.split(" ")
    let reversedWord = []
    words.forEach(word => {reversedWord.push(word.split("").reverse().join(""))}
        )
    return reversedWord.join(" ")
}
