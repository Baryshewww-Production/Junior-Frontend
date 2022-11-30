let correctAnswers = 0;
let incorrectAnswers = 0;

const answer1 = 4;
const answer2 = 4;
const answer3 = 1;
const answer4 = 2;
const answer5 = 6;

let question1 = prompt('Сколько будет 2 + 2?', '').trim();
question1 = Number(question1);
if (question1 === answer1) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

let question2 = prompt('Сколько будет 2 * 2?', '').trim();
question2 = Number(question2);
if (question2 === answer2) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

let question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?', '').trim();
question3 = Number(question3);
if (question3 === answer3) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

let question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет.' +
    ' Сколько' +
    ' в итоге конфет осталось у Маши?', '').trim();
question4 = Number(question4);
if (question4 === answer4) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

let question5 = prompt('Сколько будет 2 + 2 * 2?', '').trim();
question5 = Number(question5);
if (question5 === answer5) {
    alert('Ответ Верный');
    correctAnswers += 1;
} else {
    alert('Ответ Неверный');
    incorrectAnswers += 1;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);





