class Dictionary {
    #name
    #words

    constructor(name) {
        this.#name = name;
        this.#words = {};
    }

    add(word, description) {
        if (!this.#words[word]) {
            const newWord = { word, description };
            this.addNewWord(word, newWord);
        }
    }

    remove(key) {
        delete this.#words[key];
    }

    get(key) {
        return this.#words[key];
    }

    showAllWords() {
        Object.values(this.#words).forEach((item) => {
            console.log(`${item.word} - ${item.description}`);
        })
    }

    get mainName() {
        return this.#name;
    }

    set setMainName(newName) {
        this.#name = newName;
    }

    get allWords() {
        return this.#words;
    }

    addNewWord(word, wordObj) {
        this.#words[word] = wordObj;
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }
    add(word, description) {
        if (!this.allWords[word]) {
            this.addNewWord(word, {
                word,
                description,
                isDifficult: true,
            });
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary);
