class Dictionary {
    #name
    #words
    constructor(name) {
        this.#name = name;
        this.#words = {};
    }

    get mainName() {
        return this.#name;
    }

    set setMainName(name) {
        this.#name = name;
    }

    get allWords() {
        return this.#words;
    }

    addNewWord(wordKey, descriptionObj) {
        this.#words[wordKey] = descriptionObj;
    }

    add(word, description) {
        if (!this.#words[word]) {
            const newWord = {word, description};
            this.addNewWord(word, newWord);
        }
    }

    delete(key) {
        delete this.#words[key]
    }

    get(word) {
        return this.#words[word];
    }

    showAllWords() {
        Object.values(this.#words).forEach((wordItem) => {
            console.log(`${wordItem.word} - ${wordItem.description}`)
        })
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
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
hardWordsDictionary.delete('неологизм');
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName);
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName);
console.log(hardWordsDictionary.allWords);
