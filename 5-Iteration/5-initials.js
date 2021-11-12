function nameInitials(name) {
    return name
        .split(" ")
        .map((str) => {
            return str[0];
        })
        .join(".");
}

console.log(nameInitials("Sahar Laor"));
