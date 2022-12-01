function getSumOfNumbers(number, type = 'odd') {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        const isEven = i % 2 === 0;
        const isOdd = !isEven;
        if (!type) {
            sum += i;
        } else if (isEven && type === 'even') {
            sum += i;
        } else if (isOdd && type === 'odd') {
            sum += i;
        }
    }
    return sum;
}

const result = getSumOfNumbers(40, );
console.log('result', result);
