//Функция, которая проверяет длину переданной строки с максимальной длиной
const MAX_LENGTH = 35;
const ADS_STRING = 'Давайте проверим на что способна эта функция';
const checkStringLength = (string, maxLength) => string.length <= maxLength;

const getResultFunction = () => {
    (checkStringLength(ADS_STRING, MAX_LENGTH)) ?
        console.log('Переданная строка меньше максимальной длины') :
        console.error('Переданная строка больше максимальной длины');
};

getResultFunction();

//Создаю массивы со всеми данными, на основе которых будет создаваться массив объектов с пользователями и комментариями
const ADS_NUMBER = 25;
const ADS_DESCRIPTIONS = [
    'Невероятно-красивая авка',
    'Потрясающе!',
    'Это мы с друзьями около ёлки)',
    'Осень 2022',
    'На рыбалке. Поймали много рыбы',
];
const ADS_COMMENTS = [
    'Всё отлично!',
    'В целом всё не плохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это ведь непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилось фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилось фотография лучшею',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const ADS_NAMES = ['Артём', 'Толик', 'анька', 'Диана Петровна', 'Афанасий', 'анонимно',];

//Функция, которая возвращает целое положительное число из заданного диапазона
const getRandomPositiveInteger = (first, second) => {
    const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
    const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

//Функция, которая возвращает случайный элемент из переданного массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//Функция, которая возвращает объект, хранящий рандомные данные комментария
const createComment = () => ({
    id: getRandomPositiveInteger(1, 123),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(ADS_COMMENTS),
    name: getRandomArrayElement(ADS_NAMES),
});

//Функция, которая возвращает массив с рандомным  количеством объектов, хранящих комментарии
const createArrayOfComments = () => {
    const arrayComments = [];
    const amount = getRandomPositiveInteger(1, 7)
    for (let counter = 1; counter <= amount; counter++) {
        arrayComments.push(createComment());
    }
    return arrayComments;
};

const createObjectDescription = (number) => ({
    id: number,
    url: `photos/${number}.jpg`,
    description: getRandomArrayElement(ADS_DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: createArrayOfComments(),
});

const createArrayOfObjects = () => {
    const massiveObjects = [];
    for (let counter = 1; counter <= ADS_NUMBER; counter++) {
        massiveObjects.push(createObjectDescription(counter));
    }
    return massiveObjects;
};

console.log(createArrayOfObjects())
