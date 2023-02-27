class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    compareAge(objPerson) {
        if (objPerson.age > this.age) {
            console.log(`${this.name} младше, чем ${objPerson.name}`)
        } else if (objPerson.age < this.age) {
            console.log(`${this.name} старше, чем ${objPerson.name}`)
        } else {
            console.log(`${this.name} и ${objPerson.name} имеют одинаковый возраст`)
        }
    }
}

const personMaxim = new Person('Максим', 27);
const personAnna = new Person('Аня', 29);
const personIlja = new Person('Илья', 27);
const personKatya = new Person('Катя', 24);

personMaxim.compareAge(personIlja);
personIlja.compareAge(personKatya);
personAnna.compareAge(personIlja);
