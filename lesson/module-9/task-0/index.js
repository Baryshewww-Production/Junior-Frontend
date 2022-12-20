// Функция, которая складывает отрицательные значения и считает количество положительных чисел. После записывает
// их в новый массив

// let inputArray = [1, 2, 3, 4, -10, 0, -5, -10, 2];
// function getSumNumbersOfArray(arr) {
//     let newArray = [];
//     let sumNegativeNumbers = inputArray.reduce((total, num) => (num < 0) ? total + num : total, 0);
//     let countPositiveNumbers = inputArray
//         .filter((num) => num >= 0)
//         .reduce((total, num) => total + 1, 0);
//     newArray.push(countPositiveNumbers, sumNegativeNumbers);
//     return newArray;
// }
//
// console.log(getSumNumbersOfArray(inputArray))

//======================

//Функция для преобразования строки формата "один-два-три" => "одинДваТри"
//
// let camelize = (str) => {
//     return str
//         .split("-")
//         .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
//         .join("")
// };
//
// console.log(camelize('background-color-white-bTR'));

//==================

//Функция для фильтрации массива
//
// let isFilterArray = (arr, a, b) => {
//     return arr.filter(number => (number >= a && number <= b))
// };
//
// let array = [5, 3, 6, 2, 0, 8, 1];
//
// console.log(isFilterArray(array, 0, 4));

//===================

//Функция для удаления всех элементов из массива, которые больше или меньше заданного диапазона

// let filterRangeInPlace = (arr, a, b) => {
//     for (let i = 0; i < arr.length; i++) {
//         let value = arr[i];
//
//         if (value < a || b < value) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// };
//
// let array = [5, 3, 6, 2, 0, 8, 1];
// filterRangeInPlace(array, 2,5);
// console.log(array);

//==================

//Сортировка массива по убыванию

// let array = [5, 2, 1, -10, 8];
// let sortedArray = array.sort((a, b) => b - a);
// console.log(sortedArray);

//================

//Функция для копирования массива и его сортировки в лексикографическом порядке

// let copySorted = (arr) => {
//     return arr
//         .slice()
//         .sort()
// };
//
// let array = ["HTML", "JavaScript", "CSS"];
// let sortedArr = copySorted(array);
// console.log('array', array);
// console.log('sortedArr', sortedArr);

//=================

//Получение нового массива на основе ключей name предыдущего

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = users.map(user =>  user.name);
//
// console.log(names);

//=====================

//Преобразование массива в новый массив из новых, модифицированных объектов

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map(user => {
//     return {
//         fullName: `${user.name} ${user.surname}`,
//         id: user.id
//     }
// });
//
// console.log(usersMapped);

//===========================================

//Функция сортировки пользователей по возрасту

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 20 };
// let masha = { name: "Маша", age: 28 };
//
// let array = [ vasya, petya, masha ];
//
// function sortByAge (arr) {
//     return arr.sort((a, b) => a.age - b.age);
// }
//
// console.log(sortByAge(array));

//==============================

//Функция возвращающая средний возраст

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 45 };
// let masha = { name: "Маша", age: 29 };
//
// let array = [ vasya, petya, masha ];
//
// function getAverageAge (users) {
//     return users.reduce((acc, user) => acc += user.age, 0) / users.length;
// }
//
// console.log(getAverageAge(array));

//===========================================

//Функция, которая возвращает только уникальные элементы

// function unique(arr) {
//     let result = [];
//
//     for (let str of arr) {
//         if (!result.includes(str)) {
//             result.push(str);
//         }
//     }
//     return result;
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// let sortedArr = unique(strings);
// console.log(sortedArr);

//================================================

//Функция, которая создает объект с ключами из массива

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
//
// function groupById(arr) {
//     return arr.reduce((acc, item) => {
//         acc[item.name] = item;
//         return acc;
//     }, []);
// }
//
// console.log(groupById(users));

