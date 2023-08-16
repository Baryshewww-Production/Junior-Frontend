class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.technologies = [];
        this.status = 'Junior';
    }

    setTechnologies(technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies,
        ];
    }

    set setNewStatus(newStatus) {
        this.status = newStatus;
    }
}

const student = new Student('Илья', 26);
student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student.setTechnologies(['React']);
student.setNewStatus = 'Middle';
console.log(student)

