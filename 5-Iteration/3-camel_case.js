function toCamelCase(word) {
    let wordArr = word.split(/[-_]/);

    for (let i = 1; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i].replace(
            wordArr[i][0],
            wordArr[i][0].toUpperCase()
        );
    }
    return wordArr.join("");
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
