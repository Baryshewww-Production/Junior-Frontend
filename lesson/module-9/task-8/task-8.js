let arr = ['100', 'hello', 'javascript', , 'help200', '>', 4];
const possibleMathSigns = [">", ">", "<", "=", "+", "-", "*", "/"];

let getMathResult = (expression) => {
    if (expression.length < 3) {
        return 'Ошибка';
    }

    let modifiedArray = expression
        .map((item, index, array) => (index === 0 || index === array.length - 1) ? Number(item) : item)
        .filter((item) => (typeof item === 'number' || possibleMathSigns.includes(item)));

    const firstDigit = modifiedArray[0];
    const secondDigit = modifiedArray[modifiedArray.length - 1];

    switch (modifiedArray[1]) {
        case '+':
            return firstDigit + secondDigit;
        case '-':
            return firstDigit - secondDigit;
        case '/':
            return firstDigit / secondDigit;
        case '*':
            return firstDigit * secondDigit;
        case '=':
            return firstDigit === secondDigit;
        case '>':
            return firstDigit > secondDigit;
        case '<':
            return firstDigit < secondDigit;
        default:
            return 'Ошибка';
    }

}

const result = getMathResult(arr)
console.log(result)
