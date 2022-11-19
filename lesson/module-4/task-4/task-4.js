console.log(Number(' 1 2 3 4 5')); // Выведет NaN
console.log(Number('1234 5')); // Выведет NaN
console.log(Number('12345 '));  // Выведет 12345
console.log(String(false)); // Выведет 'false'
console.log(Boolean(0000000));  // Выведет false
console.log(Boolean(0.0000001)); // Выведет true
console.log(String(undefined));  // Выведет 'undefined'
console.log(Number('100f')); // Выведет NaN
console.log(Number('100')); // Выведет 100
console.log(Number('000001')); // Выведет 1
