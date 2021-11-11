function findUniq(arr) {
    arr.sort();
    return arr[0] === arr[1] ? arr.at(-1) : arr[0];
}

console.log(findUniq([0, 0, 0, 0, 0, 55, 0, 0, 0, 0, 0]));
