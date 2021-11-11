function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

console.log(centuryFromYear(100)); // 1
console.log(centuryFromYear(1999)); // 20
console.log(centuryFromYear(2001)); // 21
