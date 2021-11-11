function sumOfLowest(arr) {
    let lowest = Math.min(...arr);
    arr.splice(arr.indexOf(lowest), 1);
    let secondLowest = Math.min(...arr);
    return lowest + secondLowest;
}

console.log(sumOfLowest([3, 4, 78, 1, 100]));
console.log(sumOfLowest([3, 4, 78, 100]));
console.log(sumOfLowest([4, 78, 100]));
console.log(sumOfLowest([78, 100]));
