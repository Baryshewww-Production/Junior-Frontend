const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;

//Исправил ошибку программы: изначально переменная была undefined, поэтому итог программы был Nan
let totalJuniorDevelopersSalary = 0;

//Проверяю тип данных у переменной totalJuniorDevelopersSalary
console.log('totalJuniorDevelopersSalary', typeof totalJuniorDevelopersSalary, totalJuniorDevelopersSalary);

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);

    //Проверяю как посчиталась переменная salaryWithTax
    console.log('salaryWithTax', typeof salaryWithTax, salaryWithTax);
    debugger;

    totalJuniorDevelopersSalary += salaryWithTax;
    //Проверяю какой тип данных и число записалось в переменную totalJuniorDevelopersSalary
    console.log('totalJuniorDevelopersSalary', typeof totalJuniorDevelopersSalary, totalJuniorDevelopersSalary);
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
