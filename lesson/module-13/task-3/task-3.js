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

const result = new Dictionary('Илья');

result.add('Символ', 'Слово, имеющее глубокий смысл');
result.add('Тип', 'Пророческий символ из Ветхого Завета');
result.delete('Символ');
result.showAllWords();
