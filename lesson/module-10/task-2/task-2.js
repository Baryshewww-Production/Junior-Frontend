const people = [
    { id: 1, name: 'Виктор',},
    { id: 2, name: 'Алёна'},
    { id: 3, name: 'Настя'},
    { id: 4, name: 'Илья'},
    { id: 5, name: 'Филипп'},
    { id: 6, name: 'Антон'},
    { id: 7, name: 'Миша'},
    { id: 8, name: 'Никита'},
    { id: 9, name: 'Марк'},
    { id: 10, name: 'Ефим'},
    { id: 11, name: 'Аким'},
    { id: 12, name: 'Николай'},
    { id: 13, name: 'Софья'},
    { id: 14, name: 'Варвара'},
];

const ordersArr = [14, 10, 1, 5, 12, 3, 11, 8, 6, 13, 2, 4, 4, 9,];

const giveTalonsInOrder = (patients, orders) => {
  const objectWithIndexes = patients.reduce((acc, curPerson) => {

      //В аккумулятор записывается ключ [curPerson.id] и ему присваивается значение объект curPerson
      acc[curPerson.id] = curPerson;
      //Каждый раз в аккумулятор (новый объект) добавляется ключ-пара curPerson.id: curPerson,
      return acc;
  }, {});

    // Функция возвращает массив созданный на основе номера очереди, и подставленный объект, который соответствует своим
    // id значению текущего элемента массива очереди
  return orders.map(order => objectWithIndexes[order]);
};

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
