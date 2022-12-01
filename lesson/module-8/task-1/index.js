function getName1 (name) {
    return `Имя равно ${name}`;
}

const getName2 = function(name) {
    return `Имя равно ${name}`;
}

const getName3 = (name) => {
    return `Имя равно ${name}`;
}

console.log(getName1('Иван'));
console.log(getName2('Коля'));
console.log(getName3('Витя'));
