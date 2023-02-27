class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        const wordKey = String(word);
        const descriptionKey = String(description);
        if (!this.words[wordKey]) {
            this.words[wordKey] = {
                wordKey,
                descriptionKey,
            }
        }
    }

    delete(key) {
        delete this.words[key]
    }

    get(key) {
        return this.words[key];
    }

    showAllWords() {
        Object.values(this.words).forEach((wordItem) => {
            console.log(`${wordItem.wordKey} - ${wordItem.descriptionKey}`)
        })
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }

    add(word, description) {
        const wordKey = String(word);
        const descriptionKey = String(description);
        if (!this.words[wordKey]) {
            this.words[wordKey] = {
                wordKey,
                descriptionKey,
                isDifficult: true,
            }
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.delete('неологизм');

console.log(hardWordsDictionary);

hardWordsDictionary.showAllWords();
