const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
};
const todaysWinner = {
    prize: '10 000$',
};

const getRandomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const getWinner = (applicants, winnerObject) => {
    const arrayOfPeople = Object.keys(applicants); //Получаю массив из ключей передаваемого объекта
    const randomIndex = getRandomNumberInRange(0, arrayOfPeople.length); //Получаю случайное число
    const winnerNumber = arrayOfPeople[randomIndex]; //Узнаю название ключа, хранящиеся по сгенерированному индексу
    const winnerPerson = applicants[winnerNumber]; //Получаю объект, хранящийся по полученному ключу
    return {
        ...winnerObject,
        ...winnerPerson,
    }
};

const result = getWinner(winnerApplicants, todaysWinner);
console.log(result)
