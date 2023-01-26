//Функция, которая переводит миллисекунды в дни
const convertMsToDays = (ms) => Math.ceil(ms / 1000 / 60 / 60 / 24);

//Функция, которая считает сколько осталось дней до следующего дня рождения
const getDaysBeforeBirthday = (nextBirthdayDate) => {
    const currentDate = Date.now();
    const nextDate = nextBirthdayDate.getTime();
    return convertMsToDays(nextDate - currentDate)
};

const myNextBirthday = new Date(2023, 7, 12);

console.log(getDaysBeforeBirthday(myNextBirthday));
