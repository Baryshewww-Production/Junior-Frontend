const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
};
const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
};

function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return {
        ...this,
        isDomestic,
    }
}

const result1 = makeDomestic.apply(dog, [true])
const result2 = makeDomestic.call(bird, true);
const result3 = makeDomestic.bind(dog, false)();

console.log(result1)
console.log(result2)
console.log(result3)
