function findNextSquare(num) {
    let squareRoot = Math.sqrt(num);
    if (Math.floor(squareRoot) !== squareRoot) {
        return -1;
    } else {
        return (squareRoot + 1) ** 2;
    }
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
