const suspectInfoObj = {
    'Nik': ['Bob', 'Andy', 'Vitalina', 'Mike'],
    'Bread': ['John', 'Boris'],
    'Olaf': ['Jhosef', 'Makron', 'Merkel'],
    'Putin': ['Zelensky', 'Duda', 'Jhosef'],
    'Lukashenko': ['Duda', 'Zelensky', 'Litva'],
};

const deadPeopleArr = ['Jhosef', 'Makron', 'Merkel'];

const getKiller = (suspectInfo, deadPeople) => {
    let killerName = '';
    Object.entries(suspectInfo).forEach((info) => {
        const suspectPerson = info[0];
        const peopleWereSeen = info[1];
        const isKiller = deadPeople.every((name) => peopleWereSeen.includes(name));
        if (isKiller) {
            killerName = suspectPerson;
        }
    });
    return (killerName)
        ? console.log(`Этих людей завалил ${killerName}!`)
        : console.log('Мы не можем найти преступника!');
};

getKiller(suspectInfoObj, deadPeopleArr);
