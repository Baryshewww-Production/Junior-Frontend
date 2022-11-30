const existedUserLogin =  'the_best_user';
const existedUserPassword = '12345678';

let userLogin = prompt('Введите логин', '').trim();
let userPassword = prompt('Введите пароль', '').trim();

if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert(`Логин и (или) Пароль введены неверно!`);
}
