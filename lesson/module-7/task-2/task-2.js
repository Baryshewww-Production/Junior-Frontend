let temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');

//Проверяю, какой тип данных будет передаваться дальше
console.log('temperatureInCelsius', typeof temperatureInCelsius);

//Дальше явно привожу введенные данные к числовому типу
temperatureInCelsius = Number(temperatureInCelsius);

//Проверяю повторно, в итоге какой тип данных хранится в переменной
console.log('temperatureInCelsius', typeof temperatureInCelsius, temperatureInCelsius);

if (temperatureInCelsius === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;

//Проверяю произошло-ли вычисление
console.log('temperatureInFahrenheit', typeof temperatureInFahrenheit, temperatureInFahrenheit);

alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
