function longest(str1, str2) {
    return (str1 + str2)
        .toLowerCase()
        .split("")
        .sort()
        .reduce((prev, curr) => (prev.includes(curr) ? prev : prev + curr));
}

console.log(longest("aassfdsafefabvbtrj"));
