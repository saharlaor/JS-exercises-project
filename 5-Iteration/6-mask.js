function maskify(answer) {
    return (
        new Array(answer.length - 4).fill("#").join("") +
        answer.slice(answer.length - 4)
    );
}

console.log(maskify("fsadfdsajkil"));
