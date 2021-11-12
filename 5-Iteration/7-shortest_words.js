function shortestWordLength(sentence) {
    return Math.min(...sentence.split(" ").map((word) => word.length));
}

console.log(shortestWordLength("asdfd ret afda sahar laor pini hodadad"));
