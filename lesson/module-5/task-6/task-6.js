const userText = prompt('Введите любой текст');
let wordFromText = prompt('Введите слово из текста');
wordFromText = wordFromText.trim()

let indexOfWord = userText.trim().indexOf(wordFromText);

const resultText = userText.slice(0, indexOfWord);

alert(`Результат: ${resultText}`);
