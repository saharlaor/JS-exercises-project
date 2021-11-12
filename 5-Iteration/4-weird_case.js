function toWeirdCase(word) {
    let wordArr = word.split(" ");

    for (let i = 0; i < wordArr.length; i++) {
        for (let j = 0; j < wordArr[i].length; j += 2) {
            wordArr[i] = wordArr[i].replace(
                wordArr[i][j],
                wordArr[i][j].toUpperCase()
            );
        }
        for (let j = 1; j < wordArr[i].length; j += 2) {
            wordArr[i] = wordArr[i].replace(
                wordArr[i][j],
                wordArr[i][j].toLowerCase()
            );
        }
    }
    return wordArr.join(" ");
}

console.log(toWeirdCase("the stealth warrifdafdsafdsaor"));
console.log(toWeirdCase("The Stealth Warrior"));
