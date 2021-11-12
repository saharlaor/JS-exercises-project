function tribonacci(signature, n) {
    let tribonacciArr = [];
    for (let i = 0; i < n; i++) {
        signature.push(signature.reduce((prev, curr) => prev + curr));
        tribonacciArr.push(signature.shift());
    }
    return tribonacciArr;
}

console.log(tribonacci([0, 1, 1], 13));
