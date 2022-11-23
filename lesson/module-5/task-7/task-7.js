let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает' +
    ' объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript.' +
    ' JavaScript обычно используется как встраиваемый язык для программного доступ к объектам приложений.';

let middleIndex = Math.floor(javaScriptDescription.length / 2);

javaScriptDescription = javaScriptDescription
    .slice(0, middleIndex)
    .replaceAll('a', 'A')
    .replaceAll(" ", "")
    .repeat(3);

const updatedMiddleIndex = Math.floor(javaScriptDescription.length / 2);

console.log(javaScriptDescription[updatedMiddleIndex]);
console.log(javaScriptDescription);
