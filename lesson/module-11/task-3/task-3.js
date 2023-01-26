//Функция, которая переводит дни в миллисекунды
const convertDaysToMs = (days) => days * 24 * 3600 * 1000;

//Функция, которая к текущей дате прибавляет переданное кол-во дней
const addDays = (date, days) => {
    return new Date(date.getTime() + convertDaysToMs(days));
};

const result = addDays(new Date(), 3);
console.log(result);
