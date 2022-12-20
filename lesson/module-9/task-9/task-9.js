let arrayFinalResult = [];

for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
        row.push(j + 1);
    }
    arrayFinalResult.push(row)
}

console.log(arrayFinalResult);
