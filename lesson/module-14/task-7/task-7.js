class CarService {
    static DefaultWorkingHours = {
        from: '9:00',
        till: '21:00'
    }
    constructor(name, workingHours) {
        this.name = name;
        this.workingHours = workingHours || CarService.DefaultWorkingHours;
    }
    repairCar(carName) {
        if (!carName) {
            console.error('Вам необходимо указать название машины, чтобы ее отремонтировать');
        } else {
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            const startOfWorkingHours = Number(this.workingHours.from.split(':')[0]);
            const endOfWorkingHours = Number(this.workingHours.till.split(':')[0]);

            if (currentHour >= startOfWorkingHours && currentHour < endOfWorkingHours) {
                console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`);
            } else {
                console.log('К сожалению, мы сейчас закрыты. Приходите завтра');
            }
        }

    }
}

const carService = new CarService('MegaMIX');
carService.repairCar('BMW');
