function binaryToDecimal(binaryArr) {
    return binaryArr.reduce((sum, digit) => sum * 2 + digit);
}

console.log(binaryToDecimal([1, 1, 0, 1, 0, 1]));
