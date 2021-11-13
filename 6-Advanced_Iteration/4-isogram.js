function isIsogram(str) {
    return str
        .toLowerCase()
        .split("")
        .reduce((prev, curr, i) => {
            return (
                prev &&
                !str
                    .toLowerCase()
                    .slice(i + 1)
                    .includes(curr)
            );
        }, true);
}

console.log(isIsogram("asdfg")); // True
console.log(isIsogram("asdfa")); // False
console.log(isIsogram("a")); // True
console.log(isIsogram("asdfASF")); // False
console.log(isIsogram("")); // True
