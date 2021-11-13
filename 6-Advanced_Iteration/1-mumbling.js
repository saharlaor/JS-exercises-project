function accum(str) {
    return str
        .split("")
        .map(
            (letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i)
        )
        .join("");
}

console.log(accum("asdASDFEAF"));
