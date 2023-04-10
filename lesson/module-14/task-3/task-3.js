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

const russian = new Dictionary('Русское слово');
russian.add('Например', 'Забавное словечко')
russian.add('Например', 'Забавное словечко')
russian.add('Наприм', 'Забавное словечко')
russian.get('Наприм')
russian.showAllWords();
console.log(russian)
