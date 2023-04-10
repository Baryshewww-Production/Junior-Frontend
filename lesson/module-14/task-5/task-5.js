class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }
    code() {}
    learnNewTechnology(technology) {
        this.technologies = [
            ...this.technologies,
            ...technology,
        ];
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Junior');
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }
    code() {
        console.log('Junior-разработчик пишет код...');
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Middle');
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }
    code() {
        console.log('Middle-разработчик пишет код...');
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age,) {
        super(fullName, age, 'Senior');
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }
    code() {
        console.log('Senior-разработчик пишет код...');
    }
}

const junior = new JuniorDeveloper('Илья', 26);
const middle = new MiddleDeveloper('Илья', 27);
const senior = new SeniorDeveloper('Илья', 28);
console.log(junior)
console.log(middle)
console.log(senior)
