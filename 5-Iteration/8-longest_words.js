function longestWordLength(sentence) {
    return sentence
        .split(" ")
        .map((word) => [word.length, word])
        .sort((a, b) => b[0] - a[0])[0][1];
}

console.log(longestWordLength("asdfd ret afda sahar laor pini hodadad"));
