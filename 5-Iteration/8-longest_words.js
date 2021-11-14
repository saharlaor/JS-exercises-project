function longestWordLength(sentence) {
    let wordLengthObj = sentence
        .split(" ")
        .map((word) => [word.length, word])
        .sort((a, b) => b[0] - a[0]);
    const maxLength = wordLengthObj[0][0];
    return wordLengthObj
        .filter((word) => word[0] === maxLength)
        .map((word) => word[1])
        .join(", ");
}

console.log(
    longestWordLength("asdfd ret afda sahar laor pini hodadad asdfghj")
);
