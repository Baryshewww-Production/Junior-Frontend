let clientName = prompt('Введите имя клиента:', '').trim();
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?', '').trim();
let clientSpentToday = prompt('Сколько клиент потратил сегодня?', '').trim();

clientSpentForAllTime = Number(clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);

let discount = 0;

if (clientSpentForAllTime >= 500) {
    discount = 30;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
} else if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
}

if (!clientSpentToday || !clientSpentForAllTime) {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
} else {
    if (clientSpentForAllTime >= 100) {
        alert (`Вам предоставляется скидка в рамере ${discount}%`);
    }
    clientSpentToday = Math.round(clientSpentToday - (clientSpentToday * discount / 100));
    clientSpentForAllTime += clientSpentToday;

    alert (`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
}


