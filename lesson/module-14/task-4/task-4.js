class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {
                word,
                description,
            }
        }
    }

    remove(key) {
        delete this.words[key];
    }

    get(key) {
        return this.words[key];
    }

    showAllWords() {
        Object.values(this.words).forEach((item) => {
            console.log(`${item.word} - ${item.description}`);
        })
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }

    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {
                word,
                description,
                isDifficult: true,
            }
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('Дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая' +
    ' только поверхностными знаниями.');
hardWordsDictionary.showAllWords();
