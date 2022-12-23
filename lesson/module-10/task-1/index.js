const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

//Функция, создающая массив из пользователей, status которых равен online
const createObject = (obj) => obj.filter(item => item.status === 'online');

const newObject = createObject(users);

//Создаю новый массив из имен этих пользователей, и после записываю их в одну строку
const usersOnlineNames = newObject.map(item => item.username).join(', ');

//Вывожу эту переменную в сообщение
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
