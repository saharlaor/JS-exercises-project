function fibonacci(n) {
    let seq = [1, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq.at(-1) + seq.at(-2));
    }
    return seq[n - 1];
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
