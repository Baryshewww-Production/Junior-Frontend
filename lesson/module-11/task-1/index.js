//Функция, которая добавляет ноль перед цифрой, если число однозначное
const addZero = (numberString) => String(numberString).length === 1 ? `0${numberString}` : String(numberString);

//Функция, которая записывает дату в формате "дд.мм.гггг". Разделитель по умолчанию "."
const getDateFormat = (date, separator = '.') => {
    const yearNumber = date.getFullYear();
    const monthNumber = date.getMonth();
    const dateNumber = date.getDate();
    const dateArray = [dateNumber, monthNumber + 1, yearNumber].map(item => addZero(item));
    return dateArray.join(separator);
};

const newDate = new Date(2023, 10, 3);

console.log(getDateFormat(newDate));
