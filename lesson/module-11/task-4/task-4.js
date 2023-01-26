const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2023',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2023',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2023',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2023',
    },
];

//Функция, которая фильтрует массив и выбирает только тех у кого не просрочен паспорт и нет судимости
const allowVisa = (arr) => {
    return arr.filter((person) => {
        //Разбивает дату на массив
        const dateExpirationSplitted = person.passportExpiration.split('.');
        const year = dateExpirationSplitted[dateExpirationSplitted.length - 1];
        const month = dateExpirationSplitted[1];
        const date = dateExpirationSplitted[0];
        //Записывает дату в машиночитаемый вид
        const passportExpirationDate = new Date(year, month - 1, date);
        //Проверка есть ли судимость и не истек ли срок паспорта
        if ((passportExpirationDate.getTime() > Date.now()) && !person.criminalRecord) {
            return true
        }
        return false;
    });
};

const result = allowVisa(peopleWithVisa);
console.log(result)
