function myFilter(arr, condition) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function myMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
