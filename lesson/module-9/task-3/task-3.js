const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeName = prompt('Поиск кофе по названию:');
coffeeName = coffeeName.trim().toLowerCase();

const coffeeIndex = coffees.findIndex((coffee) => coffee.toLowerCase() === coffeeName)

const favoriteCoffee = coffees[coffeeIndex];
if (favoriteCoffee) {
    alert(`Держите ваш любимый кофе ${favoriteCoffee}. Он ${coffeeIndex + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}



