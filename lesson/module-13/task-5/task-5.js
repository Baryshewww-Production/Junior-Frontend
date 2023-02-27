class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code() {}

    learnNewTechnology(technology) {
        this.technologies.push(technology);
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Junior');
    }

    code() {
        console.log('Junior разработчик пишет код...');
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Middle');
    }

    code() {
        console.log('Middle разработчик пишет код...');
        this.learnNewTechnology('React');

    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Senior');
    }

    code() {
        console.log('Senior разработчик пишет код...');
        this.learnNewTechnology('React');
        this.learnNewTechnology('NodeJS');
    }
}

const junDev = new JuniorDeveloper('Ivan', 24);
const midDev = new MiddleDeveloper('Ilja', 27);
const senDev = new SeniorDeveloper('Viktor', 30);

console.log(junDev);
console.log(midDev);
console.log(senDev);

junDev.code();
console.log(junDev.technologies);

midDev.code();
console.log(midDev.technologies);

senDev.code();
console.log(senDev.technologies);



