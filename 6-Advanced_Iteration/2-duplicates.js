function duplicateCount(str) {
    let letters = str.toLowerCase().split("").sort();
    let letterObj = {};
    letters.forEach((letter) => {
        letterObj[letter] = letterObj[letter] ? letterObj[letter] + 1 : 1;
    });
    return Object.values(letterObj).reduce((prev, curr) => {
        return curr > 1 ? prev + 1 : prev;
    }, 0);
}

console.log(
    duplicateCount("asffffffffagaawfatsfdwrfAFDSgqaVGRg5eregezxcvbnm5re5t33Are")
);
