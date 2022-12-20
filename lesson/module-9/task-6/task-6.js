const numbers = [10, 4, 100, -5, 54, 2];

const sumOfNumbersInCube = numbers.reduce((sum, num) => sum + num ** 3, 0);
console.log(sumOfNumbersInCube)
