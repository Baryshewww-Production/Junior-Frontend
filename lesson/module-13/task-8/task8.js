const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level += 1;
        if (this.level === 2) {
            this.stack.push('CSS');
        }
        if (this.level === 3) {
            this.stack.push('JavaScript');
        }
        if (this.level === 4) {
            this.stack.push('React');
        }
        if (this.level === 5) {
            this.stack.push('NodeJs');
        }
        if (this.level > 5) {
            console.log('Студент выучил все технологии!');
        }
        return this;
    },
};

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel();

console.log(student.stack, student.level);

//============================================

const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-гав'
    }
};

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик'
    }
};

function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return {
        ...this,
        isDomestic,
    }
}

const newAnimal = makeDomestic.apply(bird, [false]);
console.log(newAnimal)

//=============================================

const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack () {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal (sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate (sound) {
        console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
};

const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

attack.bind(footballer)();
score.call(footballer, 'Сиииии');
substitute.apply(footballer, ['Paulo Dibala']);

//====================================

const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        const attackerValues = Object.values(this);
        const defenderValues = Object.values(defenderObject);
        let chancesCounter = 0;
        attackerValues.forEach((value, index) => {
            if (value > defenderValues[index] && typeof value === 'number') {
                chancesCounter += 1;
            }
        });
        return [chancesCounter, defenderValues.length];
    },
    improveArmy() {
        Object.entries(this).forEach((item) => {
            const key = item[0];
            const value = item[1];
            if (typeof value === 'number') {
                this[key] = value + 5;
            }
        });
    },
    attack(defender) {
        const chancesValues = this.checkChancesToWin(defender);
        const ourArmyChances = chancesValues[0];
        const seventyPercentChances = Math.round(chancesValues[1] * 70 / 100);
        if (ourArmyChances < seventyPercentChances) {
            console.log(`Наши шансы равны ${ourArmyChances}/${seventyPercentChances}. Необходимо укрепление!`);
            this.improveArmy();
        } else {
            console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
        }
    }
};
const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
};

attacker.attack(defender);
attacker.attack(defender);
attacker.attack(defender);
