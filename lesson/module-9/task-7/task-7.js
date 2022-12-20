const goals = [8, 1, 1, 3, 2, -1, 5];

// Нахожу самый удачные матчи, в которых было забито максимальное количество голов. Узнаю какой по счету это был матч
let maxNumberOfGoals = 0;
let numberBestMatch = 0;

for (let i = 0; i < goals.length - 1; i++) {
    let currentValue = goals[i];
    if (maxNumberOfGoals < currentValue) {
        maxNumberOfGoals = currentValue;
        numberBestMatch = i + 1;
    }
}
alert(`Самый результативный матч был под номером ${numberBestMatch}. В нем было забито ${maxNumberOfGoals} гол(ов).`);

//Нахожу самые плохие матчи, с минимальным количеством забитых голов. Узнаю какие они были по счету и сколько их было
let minNumberOfGoals = maxNumberOfGoals;
let numberWorstMatches = [];

for (let i = 0; i < goals.length - 1; i++) {
    let currentValue = goals[i];
    if (currentValue < minNumberOfGoals && currentValue > 0) {
        minNumberOfGoals = currentValue;
    }
}
goals.forEach((match, number) => {
    if (match === minNumberOfGoals) {
        numberWorstMatches.push(number + 1);
    }
})
alert(`Самые нерезультативные матчи были под номерами ${numberWorstMatches}. В каждом из них было забито по ${minNumberOfGoals} мячу(а).`);

//Подсчитываю сколько всего было забито голов за сезон. В учет не идут матчи с автоматическим поражением (матчи с -1)
let totalNumberOfGoals = goals.reduce((total, match) => (match > 0) ? total += match : total);

alert(`Общее количество голов за сезон равно ${totalNumberOfGoals}.`);

//Проверяю, были ли за весь сезон автоматические поражения (матчи с -1)
const autoDefeat = goals.find(match => match < 0);
(autoDefeat) ? alert(`Были автоматические поражения: да`) : alert(`Были автоматические поражения: нет`);

//Вычисляю среднее количество голов за матч
const averageNumberOfGoals = Math.ceil(goals.reduce((total, match) => total += match) / goals.length);

alert(`Среднее количество голов за матч равно ${averageNumberOfGoals}.`);

//Сортировка матчи по возрастанию. Зависит от количества забитых голов. От меньшего к большему
const sortedMatches = goals.sort();
alert(`${sortedMatches}`);
