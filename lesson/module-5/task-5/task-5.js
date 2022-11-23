const userString = prompt('Введите текст для обрезки:');

let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки:');
startSliceIndex = Number(startSliceIndex);

let  endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки:');
endSliceIndex = Number(endSliceIndex);

const resultString = userString.trim().slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${resultString}`);


