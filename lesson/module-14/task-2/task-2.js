 class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(person) {
        if (this.age > person.age) {
            console.log(`${this.name} старше, чем ${person.name}`);
        } else if (this.age === person.age) {
            console.log(`${this.name} и ${person.name} имеют одинаковый возраст`);
        } else {
            console.log(`${this.name} младше, чем ${person.name}`);
        }
    }
 }

const person1 = new Person('Илья', 26);
const person2 = new Person('Варвара', 24);

person2.compareAge(person1);
