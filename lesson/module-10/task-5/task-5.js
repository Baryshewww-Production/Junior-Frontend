const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
    { product: 'Fish', quantity: 10 },
    { product: 'Milk', quantity: 5 },
    { product: 'Butter', quantity: 2 },
    { product: 'Chips', quantity: 7 },
    { product: 'Water', quantity: 8 },
];

const groceries = {
    'Chocolate': { price: 1.5, discount: 10},
    'Orange Juice': { price: 3, discount: 0},
    'Fish': { price: 3.5, discount: 5},
    'Milk': { price: 1, discount: 30},
    'Butter': { price: 3, discount: 20},
    'Chips': { price: 0.5, discount: 0},
    'Water': { price: 1, discount: 3},
};

function getTotalPriceOfShoppingBag(shoppingBag) {
    // Записываю в новый массив значения переданного массива
    const shoppingItems = Object.values(shoppingBag);
    //Проверяю, если длина переданного массива равна нулю, значит функция вернет нуль
    if (shoppingItems.length === 0) {
        return 0;
    }
    const totalPrice = shoppingItems.reduce((acc, currentProduct) => {
        //Делаю де-структуризацию текущего элемента в массиве.
        const {product, quantity} = currentProduct;

        //Записываю в новую переменную данные из глобального объекта по ключу, который хранит имя продукта.
        const productObject = groceries[product];

        //Делаю де-структуризацию текущего объекта, который хранит цену и скидку для текущего продукта.
        const {price, discount} = productObject;
        const priceWithDiscount = productObject.price - (price * discount / 100);
        let totalProductPrice = priceWithDiscount * quantity;
        return acc += totalProductPrice;
    }, 0);

    return totalPrice.toFixed(2);
}

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice);

