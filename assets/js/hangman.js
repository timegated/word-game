const wordGame = {
    jsConcepts: [
        {
            word: 'Closures',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures'
        },
        {
            word: 'Prototype',
            link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes'
        },
        {
            word: 'Scope',
            link: 'https://developer.mozilla.org/en-US/docs/Glossary/Scope'
        },
        {
            word: 'Object',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'
        },
        {
            word: 'Function',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function'
        },
        {
            word: 'HTTP',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP'
        },
        {
            word: 'REST',
            link: 'https://developer.mozilla.org/en-US/docs/Glossary/REST'
        },
        {
            word: 'NODEJS',
            link: 'https://developer.mozilla.org/en-US/docs/Glossary/Node.js'
        },
        {
            word: 'IFFE',
            link: 'https://developer.mozilla.org/en-US/docs/Glossary/IIFE'
        }
    ],
    guesses: [],
    wins: 0,
    losses: 0,
    remainingGuesses: 10,
    targets: {
        losses: document.querySelector('.losses'),
        wins: document.querySelector('.wins'),
        randomWord: document.querySelector('.random-word'),
        guesses: document.querySelector('.guesses'),
        remainingGuesses: document.querySelector('remaining-guess')
    }
}

Object.prototype.randomIndex = function () {
    let randomIndex = Math.floor(Math.random() * this.jsConcepts.length)
    function saveIndex() {
        return randomIndex
    }
    return saveIndex();
};

Object.prototype.randomWord = function () {
    return this.jsConcepts[this.randomIndex()]
};



const createTheBlanks = () => {
    const randomWord = wordGame.randomWord();
    const word = [...randomWord.word];
    const answerArray = () => {
        return word.forEach(letter => {
            wordGame.guesses.push('_')
        })
    }

    return answerArray();
    // console.log(word);
    // console.log(link);
};

const displayTheBlanks = () => {
    createTheBlanks()
    const randomWordElement = document.querySelector('.random-word');
    randomWordElement.textContent = wordGame.guesses.join(' ')
}

displayTheBlanks()
console.log(wordGame.guesses)



