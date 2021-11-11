function nbYear(p0, percentage, aug, p) {
    let tempPopulation = p0;
    let i;
    for (i = 0; tempPopulation < p; i++) {
        tempPopulation = tempPopulation * (percentage / 100 + 1) + aug;
    }
    return i;
}

console.log(nbYear(1000, 2, 50, 1200));
