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
        console.log('chancesValues', chancesValues);
        const ourArmyChances = chancesValues[0];
        const seventyPercentChances = Math.round(chancesValues[1] * 70 / 100);
        console.log('ourArmyChances', ourArmyChances);
        console.log('seventyPercentChances', seventyPercentChances);
        if (ourArmyChances < seventyPercentChances) {
            alert(`Наши шансы равны ${ourArmyChances}/${chancesValues[1]}. Необходимо укрепление!`);
            this.improveArmy();
        } else {
            alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
        }
        console.log(this)
    }
};
const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
};

attacker.attack(defender)
