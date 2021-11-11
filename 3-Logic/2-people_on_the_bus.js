function sleepingPeople(busStops) {
    return busStops.reduce((prev, curr) => {
        return prev + curr[0] - curr[1];
    }, 0);
}

console.log(
    sleepingPeople([
        [15, 0],
        [8, 3],
        [5, 6],
        [14, 18],
        [3, 10],
        [0, 5],
    ])
); // 3
