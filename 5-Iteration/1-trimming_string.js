function trimString(str) {
    const letters = str.split("");
    if (str.length >= 2) {
        letters.shift();
        letters.pop();
    }
    return letters.join("");
}

console.log(trimString("asdf"));
