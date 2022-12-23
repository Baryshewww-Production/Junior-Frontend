const groceries = {
    'Orange Juice': { price: 1.5, discount: 10 },
    'Chocolate': { price: 2, discount: 0 },
    'Fish': { price: 3, discount: 5 },
    'Milk': { price: 2, discount: 20 },
    'Tomato': { price: 1, discount: 0 },
    'Water': { price: 0.5, discount: 0 },
}

const shoppingBagList = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
    { product: 'Fish', quantity: 5 },
    { product: 'Milk', quantity: 10 },
    { product: 'Tomato', quantity: 6 },
    { product: 'Water', quantity: 12 },
];

//Функция, которая считает полную стоимость всех продуктов с учетом их цены, количества и скидки на них
const getTotalPriceOfShoppingBag = (shoppingBag) => {
    return shoppingBag.reduce((acc, good) => {
        //Нахожу для каждого продукта полный размер его скидки
        let discount = good.quantity * groceries[good.product].price * (groceries[good.product].discount / 100);

        //Переменная хранящая количество текущего продукта
        let goodQuantity = good.quantity;

        //Переменная хранящая стоимость текущего продукта за одну штуку
        let goodPrice = groceries[good.product].price;

        //Условие, которое проверяет есть ли скидка, и в положительном ответе считает всю стоимость текущего
        // продукта с вычетом скидки
        if (groceries[good.product].discount > 0) { return acc += goodQuantity * goodPrice - discount }
        return acc += goodQuantity * goodPrice;
    }, 0);
};

const total = getTotalPriceOfShoppingBag(shoppingBagList);
console.log(total)
