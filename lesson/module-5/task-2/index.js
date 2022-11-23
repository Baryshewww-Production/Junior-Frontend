const myName = 'Илья';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена Минина';
const reasonText = 'Я хочу работать удаленно и зарабатывать хорошие деньги';
const numberOfMonth = 1;

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;
myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());

console.log(myInfoText);
console.log('length', myInfoText.length);
console.log('Первый', myInfoText[0]);
console.log('Последний', myInfoText[myInfoText.length - 1]);
