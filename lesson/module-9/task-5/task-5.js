let clientsEstimations = [];

let askClientToGiveEstimation = () => {
    let estimationClientString = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
    const estimationClient = Number(estimationClientString.trim());

    if (estimationClient > 0 && estimationClient <= 10) {
        clientsEstimations.push(estimationClient);
    }

    return clientsEstimations;
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(est => est > 5);
const notGoodEstimations = clientsEstimations.filter(est => est <= 5);

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);
