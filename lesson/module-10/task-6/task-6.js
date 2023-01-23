//Функция, которая генерирует случайное число от 0 до 1
const getRandomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hero = {
    name: 'Viking',
    health: 100,
    heatEnemy: () => enemy.health -= 10,
};

const enemy = {
    name: 'Grek',
    health: 100,
    heatHero: () => hero.health -= 10,
};

//Функция, которая запускает игру, и выключает когда у одного из объектов значению в ключе health <= 0
const startGame = (heroPlayer, enemyPlayer) => {
    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        const randomNumber = getRandomNumberInRange(0, 1);

        //Если выпадает ноль, у противоположного объекта отнимается 10 из ключа health
        if (randomNumber === 0) {
            heroPlayer.heatEnemy();
        }

        //Если выпадает один, у противоположного объекта отнимается 10 из ключа health
        else if (randomNumber === 1) {
            enemyPlayer.heatHero();
        }
    }

    //Выводит в консоль имя победителя, и его оставшиеся очки
    (heroPlayer.health > 0)
        ? console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`)
        : console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`)
};

startGame(hero, enemy);
